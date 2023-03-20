import { useEffect, useState, useMemo } from "react";

export function useObserver(ref, className, threshold ){

  const [animation, setAnimation] = useState("")

  const options = useMemo(() =>  ({
    root: null,
    rootMargin: '50px',
    threshold: threshold || 0.3,
  }),[threshold])

  useEffect(()=>{
    const observer = new IntersectionObserver(observerImage,options);
    observer.observe(ref.current)

    function observerImage(entries) {
      const intersect = entries[0].isIntersecting;
      intersect && setAnimation(className)
    }

  },[ref, className, options])
  
  

  return animation
}

