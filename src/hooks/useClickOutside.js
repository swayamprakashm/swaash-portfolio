import { useEffect, useRef } from 'react';

// A custom hook that listens for clicks outside of a specific component
export const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      // If the click is OUTSIDE the referenced element, trigger the handler
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};