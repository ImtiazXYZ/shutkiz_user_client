"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const FacebookPixel = () => {
  useEffect(() => {
    ReactPixel.init('276674798401147');
    ReactPixel.pageView();
  }, []);

  return null;
};

export default FacebookPixel;
