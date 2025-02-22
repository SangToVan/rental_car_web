import { useState } from 'react'
import { useSelector } from 'react-redux'
import LogoutModal from '../../../components/modals/LogoutModal'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.css'
import logoImg from '../../../assets/img-logo.png'
import placeholderImg from '../../../assets/img-profile.png'

export default function Header({ onOpenAuthModal }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const [show, setShow] = useState(false)

  const onOpenLoginModal = () => {
    onOpenAuthModal(true)
  }

  const onOpenSignupModal = () => {
    onOpenAuthModal(false)
  }

  return (
    <>
      <header id="header" className={clsx('fixed-top', styles.header)}>
        <div className="container d-flex align-items-center">
          <h1 className={clsx('me-auto', styles.logo)}>
            <Link to="/">
              <img
                src={logoImg}
                alt='Rental Car Website'
                className="h-[74px] w-[216px]"
              >
              </img>
            </Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Về Saoto
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Trở thành chủ xe
                </Link>
              </li>
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
                    {user?.role === 'CUSTOMER' && (
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="/my-booking"
                        >
                          <span>Đơn đặt xe</span>
                        </Link>
                      </li>
                    )}
                    {user?.role === 'OWNER' && (
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
                    {user?.role === 'OWNER' && (
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
                  <li>
                    <Link className="nav-link" onClick={onOpenSignupModal}>
                            Đăng ký
                    </Link>
                  </li>
                  <li className='rounded-10px border-1px text-center'>
                    <Link className="nav-link justify-items-center" onClick={onOpenLoginModal}>
                            Đăng nhập
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <LogoutModal show={show} onClose={() => setShow(false)} />
    </>
  )
}