import Header from './component/Header';
import './App.css';
import Home from './component/Home';
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the routes using createBrowserRouter
const routeBrowser = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    )
  },
  {
    path: '/aboutus',
    element: (
      <>
        <Header />
        <AboutUs />
      </>
    )
  },
  {
    path: '/contactus',
    element: (
      <>
        <Header />
        <ContactUs />
        </>
    )
  }



]);

function App() {


  return (
    // Wrap the app with RouterProvider for routing
    <RouterProvider router={routeBrowser}>
      <Home />
    </RouterProvider>
  );
}

export default App;
