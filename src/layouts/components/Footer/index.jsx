import clsx from 'clsx'
import style from './styles.module.css'
import logoImg from '../../../assets/img-logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <div className="footer-top">
        <div className="w-[100%] h-[0px] opacity-60 border border-black"></div>
        <div className="container">
          <div className="row pt-4">
            <div className={clsx('col-md-4', style.footer_links)}>
              <h1 className={clsx('me-auto', style.logo)}>
                <Link to="/">
                  <img
                    src={logoImg}
                    alt='Rental Car Website'
                    className="h-[74px] w-[216px]"
                  >
                  </img>
                </Link>
              </h1>
              <ul className="mt-3">
                <li>
                  <ul>
                    <li>
                      <p>1900 1900</p>
                    </li>
                    <li>
                      <p>Tổng đài hỗ trợ: 7AM - 10PM</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <p>contact@saoto.vn</p>
                    </li>
                    <li>
                      <p>Gửi mail cho Saoto</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={clsx('col-md-4', style.footer_links)}>
              <h5>Chính sách</h5>
              <ul className="mt-3">
                <li>
                  {/* <Link to="/my-booking">Manage bookings</Link> */}
                  <p>Chính sách và quy định</p>
                </li>
                <li>
                  {/* <Link to="/wallet">Manage wallet</Link> */}
                  <p>Quy chế hoạt động</p>
                </li>
                <li>
                  {/* <Link to="/my-cars">Manage cars</Link> */}
                  <p>Bảo mật thông tin</p>
                </li>
                <li>
                  {/* <Link to="/my-cars">Manage cars</Link> */}
                  <p>Giải quyết tranh chấp</p>
                </li>
              </ul>
            </div>
            <div className={clsx('col-md-4', style.footer_links)}>
              <h5>Tìm hiểu thêm</h5>
              <ul className="mt-3">
                <li>
                  {/* <Link to="/">Log in</Link> */}
                  <p>Hướng dẫn chung</p>
                </li>
                <li>
                  {/* <Link to="/">Sign up</Link> */}
                  <p>Hướng dẫn đặt xe</p>
                </li>
                <li>
                  {/* <Link to="/">Sign up</Link> */}
                  <p>Hướng dẫn thanh toán</p>
                </li>
                <li>
                  {/* <Link to="/">Sign up</Link> */}
                  <p>Hỏi và trả lời</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
