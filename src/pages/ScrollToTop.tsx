// thiss file is used to scroll to the top of the page when the route changes
// it is used in the App.tsx file to ensure that the page scrolls to the top
// when the user navigates to a different page
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
