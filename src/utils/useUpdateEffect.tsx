import { useEffect, useRef } from 'react';

export const useUpdateEffect = (callback: any, dependencies: any) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return () => (isMounted.current = true);
    return callback();
  }, dependencies);
};
