
import { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: number = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect (() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timerId);
    }
  },[value, delay])
  return debounceValue;
}