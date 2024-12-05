// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(-10, -10); // Scroll to top of the page
  }, [location]);

  return null;
};

export default ScrollToTop;
