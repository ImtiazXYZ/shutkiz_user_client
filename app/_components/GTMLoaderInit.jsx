"use client";

import { useEffect } from "react";

export default function GTMLoaderInit() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  return null;
}