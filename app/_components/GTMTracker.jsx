// _components/GTMTracker.jsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "../_lib/gtm";

export default function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef('');

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    
    // Only track if URL changed
    if (lastPathRef.current !== url) {
      console.log("📍 GTMTracker: Tracking page view for:", url);
      trackPageView(url);
      lastPathRef.current = url;
    }
  }, [pathname, searchParams]);

  return null;
}