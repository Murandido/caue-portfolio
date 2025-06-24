"use client";

import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

export default function OverlayScroll() {
  useEffect(() => {
    const osInstance = OverlayScrollbars(document.body, {
      scrollbars: { autoHide: "never", theme: "os-theme-dark" },
    });

    return () => {
      if (osInstance) osInstance.destroy();
    };
  }, []);

  return null;
}
