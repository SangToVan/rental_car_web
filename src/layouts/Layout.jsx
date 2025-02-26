import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../shared/toolkits/authModalSlice";
import { Outlet } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthModal from "../components/modals/AuthModal/AuthModal";

export default function Layout() {
  const { show: showAuthModal } = useSelector((state) => state.authModal);
  const dispatch = useDispatch();
  const [isLoginAction, setIsLoginAction] = useState(true);

  const handleOpenAuthModal = (isLogin) => {
    dispatch(setShowAuthModal(true));
    setIsLoginAction(isLogin);
  };

  const handleCloseAuthModal = () => {
    dispatch(setShowAuthModal(false));
  };
  return (
    <>
      <ScrollTop />
      <Header onOpenAuthModal={handleOpenAuthModal} />
      <main
        id="main"
        className="main"
        style={{
          marginTop: "var(--margin-top-header)",
          minHeight: "calc(100vh - var(--margin-top-header))",
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <AuthModal
        show={showAuthModal}
        onClose={handleCloseAuthModal}
        isLoginAction={isLoginAction}
      />
    </>
  );
}
