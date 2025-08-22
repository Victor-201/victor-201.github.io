import { useState, useEffect, useCallback } from "react";

export default function useActiveHash(defaultHash = "#home") {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || defaultHash);

  const onHashChange = useCallback(
    () => setActiveHash(window.location.hash || defaultHash),
    [defaultHash]
  );

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [onHashChange]);

  return activeHash;
}
