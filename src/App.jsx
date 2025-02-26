//import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    toast.error("Please login before accessing");
    return <Navigate to="/" replace={true} />;
  }
  return <Outlet />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </>
  );
}

export default App;
