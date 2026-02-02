import { useEffect, useState } from "react";

export const useSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return { open, toggle, close, setOpen };
};
