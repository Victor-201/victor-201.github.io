import { useRef, useState, useEffect } from "react";

export default function useNavUnderline(navItems, activeHash) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef([]);

  useEffect(() => {
    const idx =
      hoverIndex !== null
        ? hoverIndex
        : navItems.findIndex((item) => item.href === activeHash);

    const el = navRefs.current[idx];
    if (el && el.parentNode) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentNode.getBoundingClientRect();
      setUnderlineStyle({
        left: `${rect.left - parentRect.left}px`,
        width: `${rect.width}px`,
        opacity: 1,
      });
    } else {
      setUnderlineStyle({ opacity: 0 });
    }
  }, [hoverIndex, activeHash, navItems]);

  return { navRefs, underlineStyle, hoverIndex, setHoverIndex };
}
