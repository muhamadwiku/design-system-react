import React, {lazy, Suspense} from 'react';
import lazyFallback from '../components/elements/LazyFallback';

const Suspensed = (Element) =>
 function suspense(props) {
   return(
     <Suspense fallback = {<lazyFallback/>}>
       <Element {...props} />
     </Suspense>
   )
 }

 // eslint-disable-next-line import/no-anonymous-default-export
 export default {
   Error404: Suspensed(lazy(() => import('./Error404'))),
   Home: Suspensed(lazy(() => import('./LandingPage/Home'))),
   Blog: Suspensed(lazy(() => import('./LandingPage/Blog'))),
   AboutUs: Suspensed(lazy(() => import('./LandingPage/AboutUs'))),
   
 };