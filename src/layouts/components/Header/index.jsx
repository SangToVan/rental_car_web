import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutModal from "../../../components/modals/LogoutModal";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.css";
import logoImg from "../../../assets/img-logo.png";
import placeholderImg from "../../../assets/img-profile.png";

export default function Header({ onOpenAuthModal }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const onOpenLoginModal = () => {
    onOpenAuthModal(true);
  };

  const onOpenSignupModal = () => {
    onOpenAuthModal(false);
  };

  return (
    <>
      <header id="header" className={clsx("fixed-top", styles.header)}>
        <div className="absolute w-[1440px] h-[121px] top-0 left-0 bg-white rounded-[3px]">
          <div className="relative w-[1249px] h-[65px] top-7 left-[100px]">
            <Link to="/">
              <img
                src={logoImg}
                alt="Rental Car Website"
                className="w-[190px] h-[65px] absolute top-0 left-0 object-cover"
              ></img>
            </Link>
            <div className="absolute top-[22px] left-[680px]">
              <Link
                to="/"
                className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
              >
                Về Saoto
              </Link>
            </div>

            <div className="absolute top-[22px] left-[801px]">
              <Link
                to="/"
                className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
              >
                Trở thành chủ xe
              </Link>
            </div>

            {isAuthenticated ? (
              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  to="#"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={user?.avatar || placeholderImg}
                    alt="Profile"
                    className="rounded-circle img-profile"
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2 fs-6">
                    {user?.username}
                  </span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/my-profile"
                    >
                      <span>Thông tin cá nhân</span>
                    </Link>
                  </li>
                  {user?.role === "CUSTOMER" && (
                    <li>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/my-booking"
                      >
                        <span>Đơn đặt xe</span>
                      </Link>
                    </li>
                  )}
                  {user?.role === "OWNER" && (
                    <li>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/my-cars"
                      >
                        <span>Xe của tôi</span>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/wallet"
                    >
                      <span>Ví của tôi</span>
                    </Link>
                  </li>
                  {user?.role === "OWNER" && (
                    <li>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/my-reports"
                      >
                        <span>Thống kê</span>
                      </Link>
                    </li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => setShow(true)}
                    >
                      <span>Đăng xuất</span>
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <div className="top-[23px] left-[989px] absolute">
                  <Link
                    onClick={onOpenSignupModal}
                    className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
                  >
                    Đăng ký
                  </Link>
                </div>

                <div className="absolute w-36 h-14 top-1.5 left-[1101px]">
                  <div className="relative h-[58px] -top-px -left-px rounded-[10px]">
                    <Link onClick={onOpenLoginModal}>
                      <div className="absolute w-36 h-[58px] top-0 left-0 rounded-[10px] border border-solid border-black">
                        <div className="top-[17px] left-[27px] absolute [font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap">
                          Đăng nhập
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}

            <img
              className="absolute w-px h-14 top-1.5 left-[966px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/kjwTAoO7/img/line-1.svg"
            />
          </div>
        </div>
      </header>
      <LogoutModal show={show} onClose={() => setShow(false)} />
    </>
  );
}
