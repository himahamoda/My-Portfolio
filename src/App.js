import { Suspense, useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./component/Home/Home";
import Layout from './component/Lyout/Lyout'; // Corrected spelling from 'Lyout' to 'Layout'
import { DarkModeProvider } from './context';
import Web from './component/Web/Web';
import BerlinProject from './component/Projects/Gallery/Gallery';
// import Overview from './component/HomeSlider/Overview';
// import { Contacts } from '@mui/icons-material';
// import Videos from './component/Videos/videos';
import Berlin from './component/Projects/SomePics/SomeP';
import Phone from './component/Projects/New me/VideoHome';
import { Card, Nav } from 'react-bootstrap';
import Designs from './component/Projects/SomePics/SomeP';
import Logo from './component/Logo/Logo';
import NavToggle from './component/Nav/Nav';
import Services from '../src/component/services/Services'
import Camp from './component/Camp/Camp';
import ScrollToTopButton from './component/Scroll/Scroll';

export function App() {
  const routers = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> }, // Corrected index route
        // { path: 'branding', element: <Branding /> }, // Lowercase path
        // { path: 'overview', element: <Overview /> }, // Lowercase path
        // { path: 'Contacts', element: <Contacts /> }, // Lowercase path
        // { path: 'videos', element: <Videos/> }, // Lowercase path
        { path: 'web', element: <Web /> },
        { path: 'Berlin', element: < Berlin/> },
        { path: 'Designs', element: < Designs/> },
        { path: 'Phone', element: < Phone/> },
        { path: 'Card', element: < Card/> },
        { path: 'services', element: < Services/> },
        { path: 'Logo', element: < Logo/> },
        { path: 'NavToggle', element: < NavToggle/> },
        { path: 'Camp', element: < Camp/> },
      ]
    }
  ]);

  return (
    <DarkModeProvider>
  
        <RouterProvider router={routers} />
        <ScrollToTopButton />

    </DarkModeProvider>
  );
}

export default App;