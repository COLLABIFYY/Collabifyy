import { useEffect, useRef, useState } from 'react';

const useScrollObserver = ({ threshold = 0.1 } = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Element is visible
                setIsVisible(true);
            } else {
                // Element is NOT visible
                if (entry.boundingClientRect.top > 0) {
                    // Below viewport - reset to allow animation on scroll down
                    setIsVisible(false);
                } else if (entry.boundingClientRect.top < 0) {
                    // Above viewport - keep visible (or mark visible if loaded at bottom)
                    setIsVisible(true);
                }
            }
        }, { threshold });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

export default useScrollObserver;
