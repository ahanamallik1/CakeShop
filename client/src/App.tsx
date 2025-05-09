import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Bakery from "./components/Bakery/Bakery";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import CustomNavbar from "./components/Navbar/Navbar";
import "./App.css";
import Orders from "./components/Orders/Orders";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import NotFound from "./components/NotFoundPage/NotFound";

// Lazy load Products component to improve performance (Code splitting)
const Products = lazy(() => import("./components/Products/Products"));

const App: React.FC = () => {
  const successMessage = useSelector(
    (state: RootState) => state.orders.successMessage
  );

  return (
    <Router>
      <CustomNavbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Bakery />} />
          <Route
            path="/products"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Products />
              </Suspense>
            }
          />
          <Route path="/orders" element={<Orders />} />
          {/* Render the SuccessPage only if the order processing is successful */}
          <Route
            path="/success"
            element={
              successMessage?.message === "success" ? (
                <SuccessPage />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="*" element={<NotFound />} /> {/* <- Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
