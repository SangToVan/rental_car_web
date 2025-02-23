import clsx from "clsx";
import style from "./styles.module.css";
import logoImg from "../../../assets/img-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <div className="footer-top">
        <div className="absolute w-[1242px] h-[320px] top-[2292px] left-[99px]">
          <div className="absolute w-[300px] h-[225px] top-[30px] left-[30px]">
            <Link to="/">
              <img
                src={logoImg}
                alt="Rental Car Website"
                className="w-[243px] h-[74px] absolute top-0 left-0 object-cover"
              ></img>
            </Link>

            <div className="absolute w-[304px] h-[57px] top-[90px] left-0">
              <div className="absolute w-28 h-[23px] top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                1900 1900
              </div>

              <p className="absolute w-[300px] h-[23px] top-[34px] left-0 opacity-60 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                Tổng đài hỗ trợ: 7AM - 10PM
              </p>
            </div>

            <div className="absolute w-[204px] h-[57px] top-[168px] left-0">
              <div className="absolute w-[193px] h-[23px] top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                contact@saoto.vn
              </div>

              <div className="absolute w-[200px] h-[23px] top-[34px] left-0 opacity-60 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                Gửi mail cho Saoto
              </div>
            </div>
          </div>

          <div className="absolute w-[310px] h-[220px] top-[30px] left-[471px]">
            <div className="absolute w-44 h-7 top-0 left-0 [font-family:'Roboto',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
              Chính sách
            </div>

            <p className="absolute w-[300px] h-[23px] top-14 left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Chính sách và quy định
            </p>

            <div className="absolute w-[246px] h-[23px] top-[103px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Quy chế hoạt động
            </div>

            <div className="absolute w-[228px] h-[23px] top-[150px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Bảo mật thông tin
            </div>

            <div className="absolute w-[276px] h-[23px] top-[197px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Giải quyết tranh chấp
            </div>
          </div>

          <div className="absolute w-[310px] h-[220px] top-[30px] left-[912px]">
            <div className="absolute w-[235px] h-7 top-0 left-0 [font-family:'Roboto',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
              Tìm hiểu thêm
            </div>

            <div className="absolute w-[239px] h-[23px] top-14 left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Hướng dẫn chung
            </div>

            <div className="absolute w-[239px] h-[23px] top-[103px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Hướng dẫn đặt xe
            </div>

            <div className="absolute w-[300px] h-[23px] top-[150px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Hướng dẫn thanh toán
            </div>

            <div className="absolute w-[167px] h-[23px] top-[197px] left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              Hỏi và trả lời
            </div>
          </div>
        </div>
        <img
          className="absolute w-full h-px top-[2291px] left-0 object-cover"
          alt="Line"
          src="https://c.animaapp.com/TzXYRGLE/img/line-4.svg"
        />
      </div>
    </footer>
  );
}
