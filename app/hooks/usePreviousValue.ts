import { useEffect, useRef } from 'react';

function usePreviousValue<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePreviousValue;