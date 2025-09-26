import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import InfrastructureProcess from './pages/infrastructure-process';
import Contact from './pages/contact';
import Products from './pages/products';
import About from './pages/about';
import Homepage from './pages/homepage';
import BlockedPage from './components/BlockedPage';
import Header from "./components/ui/Header";
import Footer from "./pages/homepage/components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header/>
        <RouterRoutes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Optional redirect for /homepage */}
          <Route path="/homepage" element={<Navigate to="/" replace />} />

          {/* Other pages wrapped in BlockedPage */}
          <Route path="/about" element={<BlockedPage><About /></BlockedPage>} />
          <Route path="/products" element={<BlockedPage><Products /></BlockedPage>} />
          <Route path="/contact" element={<BlockedPage><Contact /></BlockedPage>} />
          <Route path="/infrastructure-process" element={<BlockedPage><InfrastructureProcess /></BlockedPage>} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <Footer/>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
