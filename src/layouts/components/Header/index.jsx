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

  const openAuthModal = (isLogin) => onOpenAuthModal(isLogin);

  const renderProfileMenu = () => {
    const menuItems = [
      { path: "/my-profile", label: "My profile" },
      ...(user?.role === ROLE.CUSTOMER
        ? [{ path: "/my-booking", label: "My booking" }]
        : []),
      ...(user?.role === ROLE.OWNER
        ? [
            { path: "/my-cars", label: "My cars" },
            { path: "/my-reports", label: "My reports" },
          ]
        : []),
      ...(user?.role !== ROLE.ADMIN
        ? [{ path: "/wallet", label: "My wallet" }]
        : []),
    ];

    return (
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        {menuItems.map(({ path, label }) => (
          <li key={path}>
            <Link className="dropdown-item d-flex align-items-center" to={path}>
              <span>{label}</span>
            </Link>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => setShow(true)}
          >
            <span>Log out</span>
          </button>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="w-full h-30 bg-white rounded-[3px]">
        <Link to="/">
          <img
            src={logoImg}
            alt="Rental Car Website"
            className="w-[190px] h-[65px] top-7 left-[92px] absolute object-cover"
          ></img>
        </Link>

        <div className="absolute w-[600px] h-14 top-8 right-[92px]">
          <div className="absolute w-[300px] h-14 top-0 right-0">
            <div className="absolute w-36 h-14 top-0 right-0">
              <Link onClick={() => openAuthModal(true)}>
                <div className="relative w-[142px] h-14 rounded-[10px] border border-solid border-black">
                  <div className="top-[15px] left-[25px] absolute [font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap">
                    Đăng nhập
                  </div>
                </div>
              </Link>
            </div>

            <div className="absolute w-36 h-14 top-0 left-0">
              <div className="top-4 left-9 absolute">
                <Link
                  onClick={() => openAuthModal(false)}
                  className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute w-[300px] h-6 top-4 left-0">
            <div className="absolute top-0 left-0 ">
              <Link
                to="/"
                className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
              >
                Về Saoto
              </Link>
            </div>

            <div className="absolute top-0 right-9 ">
              <Link
                to="/"
                className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg text-center tracking-[0.50px] leading-6 whitespace-nowrap"
              >
                Trở thành chủ xe
              </Link>
            </div>
          </div>

          <img
            className="absolute w-px h-14 top-0 left-[302px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/bSh3vUdE/img/line-1.svg"
          />
        </div>
      </div>
      {/* <div className="w-96 h-20 left-0 top-0 relative">
          <div className="w-96 h-20 left-0 top-0 absolute bg-white rounded-sm" />
          <div className="w-96 h-16 left-[95px] top-2 absolute">
            <Link to="/">
              <img
                src={logoImg}
                alt="Rental Car Website"
                className="w-48 h-16 left-0 top-0 absolute"
              ></img>
            </Link>
            <div className="w-96 h-14 left-[687px] top-[6px] absolute">
              <div className="left-0 top-[16px] absolute text-center ">
                <Link
                  to="/"
                  className="text-black text-lg font-medium font-['Roboto'] leading-normal tracking-wide"
                >
                  Về Saoto
                </Link>
              </div>
              <div className="left-[121px] top-[16px] absolute text-center ">
                <Link
                  to="/"
                  className="text-black text-lg font-medium font-['Roboto'] leading-normal tracking-wide"
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
                  {renderProfileMenu()}
                </li>
              ) : (
                <>
                  <div className="left-[309px] top-[17px] absolute text-center ">
                    <Link
                      onClick={() => openAuthModal(false)}
                      className="text-black text-lg font-medium font-['Roboto'] leading-normal tracking-wide"
                    >
                      Đăng ký
                    </Link>
                  </div>
                  <div className="w-36 h-14 left-[421px] top-0 absolute">
                    <Link onClick={() => openAuthModal(true)}>
                      <div className="w-36 h-14 left-0 top-0 absolute rounded-lg border border-black">
                        <div className="left-[26px] top-[16px] absolute text-center text-black text-lg font-medium font-['Roboto'] leading-normal tracking-wide">
                          Đăng nhập
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )}
              <div data-svg-wrapper className="left-[286px] top-0 absolute">
                <svg
                  width="2"
                  height="56"
                  viewBox="0 0 2 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path opacity="0.3" d="M1 0L1 56" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
        </div> */}
      <LogoutModal show={show} onClose={() => setShow(false)} />
    </>
  );
}
