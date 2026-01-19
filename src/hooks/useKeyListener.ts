import { useEffect, useCallback } from "react";

type KeyListenerOptions = {
  keys?: string[];
};

export function useKeyListener(
  callback: (event: KeyboardEvent) => void,
  { keys }: KeyListenerOptions = {}
) {
  const handler = useCallback(
    (event: KeyboardEvent) => {
      if (!keys || keys.includes(event.key)) {
        callback(event);
      }
    },
    [callback, keys]
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
}
