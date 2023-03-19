import { useEffect, useState } from "react";

export function useObserver(ref, className, threshold ){

  const [animation, setAnimation] = useState("")

  const options = {
    root: null,
    rootMargin: '50px',
    threshold: threshold || 0.3,
  }

  useEffect(()=>{
    const observer = new IntersectionObserver(observerImage,options);
    observer.observe(ref.current)

    function observerImage(entries) {
      const intersect = entries[0].isIntersecting;
      intersect && setAnimation(className)
    }

  },[ref])
  
  

  return animation
}

