import { useEffect, useState, useRef } from 'react';

const useOnScreen = ({ref}) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if(observerRef.current !== null) {
        observerRef.current = new IntersectionObserver(([entry]) =>
        setIsOnScreen(entry.isIntersecting)
        );
    }
  }, []);

  useEffect(() => {
    if(observerRef.current !== null) {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
}
  }, [ref]);

  return isOnScreen;
}

export default useOnScreen;