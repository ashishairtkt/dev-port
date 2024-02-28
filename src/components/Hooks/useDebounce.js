import { useState, useEffect } from "react";

export function useDebounce({ value, milliSeconds }) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debounceValue;
}
