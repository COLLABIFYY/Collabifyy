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
                // If the element is below the viewport (top > 0), reset visibility so it animates again when we scroll down.
                // If the element is above the viewport (top < 0), keep it visible so it doesn't re-animate when we scroll up.
                if (entry.boundingClientRect.top > 0) {
                    setIsVisible(false);
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
