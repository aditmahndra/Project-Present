import { useLayoutEffect, useRef, useCallback, useState, useEffect } from 'react';
import Lenis from 'lenis';

export const ScrollScaleItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-scale-card relative w-full h-100 my-0 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-center will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center'
    }}
  >
    {children}
  </div>
);

const MOBILE_BREAKPOINT = 768;

const ScrollScale = ({
  children,
  className = '',
  baseScale = 0.85,
  scaleDistance = '50%',
  useWindowScroll = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const initialCardPositionsRef = useRef(new Map());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (start === end) return 0;
    const progress = (scrollTop - start) / (end - start);
    return Math.min(1, Math.max(0, progress));
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        return element.getBoundingClientRect().top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (isMobile || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const scaleDistancePx = parsePercentage(scaleDistance, containerHeight);
    
    const centerScreen = containerHeight / 2;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = initialCardPositionsRef.current.get(i);
      if (cardTop === undefined) return;
      
      const cardCenterInScroll = cardTop + card.clientHeight / 2;
      
      const offsetFromCenter = cardCenterInScroll - scrollTop - centerScreen;
      
      const absOffset = Math.abs(offsetFromCenter);
      const halfScaleDistance = scaleDistancePx;

      let scale;
      if (absOffset <= halfScaleDistance) {
        const progressToCenter = 1 - (absOffset / halfScaleDistance);
        scale = baseScale + progressToCenter * (1 - baseScale);
      } else {
        scale = baseScale;
      }

      const newTransform = {
        scale: Math.round(scale * 1000) / 1000,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001;

      if (hasChanged) {
        const transform = `scale(${newTransform.scale}) translateZ(0)`;
        
        card.style.transform = transform;
        
        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [
    isMobile,
    baseScale,
    scaleDistance,
    useWindowScroll,
    parsePercentage,
    getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (isMobile) return;

    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-scale-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [isMobile, handleScroll, useWindowScroll]);

  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (lenisRef.current) {
      lenisRef.current.destroy();
    }
    cardsRef.current.forEach(card => {
      if (card) {
        card.style.transform = '';
        card.style.willChange = '';
      }
    });
    cardsRef.current = [];
    lastTransformsRef.current.clear();
    initialCardPositionsRef.current.clear();
    isUpdatingRef.current = false;
  }, []);

  useLayoutEffect(() => {
    if (isMobile) {
      cleanup();
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-scale-card')
        : scroller.querySelectorAll('.scroll-scale-card')
    );

    cardsRef.current = cards;
    const initialPositions = initialCardPositionsRef.current;

    cards.forEach((card, i) => {
      const cardTop = getElementOffset(card);
      initialPositions.set(i, cardTop);
      
      card.style.willChange = 'transform';
      card.style.transform = 'scale(1) translateZ(0)';
    });

    setupLenis();
    updateCardTransforms();

    return cleanup;
  }, [
    isMobile,
    baseScale,
    scaleDistance,
    useWindowScroll,
    setupLenis,
    updateCardTransforms,
    getElementOffset,
    cleanup
  ]);

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
      }
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: isMobile ? 'auto' : 'smooth',
        willChange: 'scroll-position'
      };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-scale-inner mt-4 mb-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ScrollScale;