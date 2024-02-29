import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // const [currentPath, setCurrentPath] = useState(pathname);
  // const [pathName, setPathName] = useState({previous: '', current: ''});
  // const [prevPathName, setPrevPathName] = useState('');

  // console.log({pathname})
  // console.log({pathName})
  // Automatically scrolls to top whenever pathname changes
  // useEffect(() => {
  //   if(pathName.current === '' && pathName.previous === ''){
  //     setPathName((prev) => ({
  //       previous: prev.current,
  //       current: pathname,
  //     }));
  //   }
  //   if(pathName.current !== pathName.previous){
  //     setPathName((prev) => ({
  //       previous: prev.current,
  //       current: pathname,
  //     }));
      
  //     window.scrollTo(0, 0);
      
  //   }
  // }, [pathname]);

  // useEffect(() => {
  //   console.log('log 1')
  //   setCurrentPath(pathname);
  // }, [pathname]);

  // useEffect(() => {
  //   console.log('log 2')
  //   setPathName((prev) => {
  //     if (prev.current !== pathname) {
  //       return {
  //         previous: prev.current,
  //         current: pathname,
  //       }
  //     } else {
  //       return {
  //         previous: prev.previous,
  //         current: prev.current,
  //       }
  //     }
  //   });
  // }, [pathname]);

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [pathname]);

  return null;
}

export default ScrollToTop;