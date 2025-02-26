export default function Hero() {
  return (
    <div className="w-full h-[600px]">
      <div className="relative w-full h-[600px] top-0 left-0 justify-items-center">
        <div className="relative w-[1250px] h-[593px]">
          <div className="absolute w-[1250px] h-[500px] top-0 left-0 bg-[url(https://c.animaapp.com/QeY2oEN3/img/banner-1.png)] bg-cover bg-[50%_50%]">
            <div className="relative w-[1250px] h-44 top-[74px]">
              <p className="absolute w-[1250px] h-6 top-[152px] left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-xl text-center tracking-[0.50px] leading-6 whitespace-nowrap">
                Thuê xe dễ dàng, an toàn &amp; tiện lợi trên khắp Việt Nam!
              </p>

              <p className="absolute w-[1250px] h-[100px] top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-5xl text-center tracking-[1.50px] leading-[50px]">
                SAOTO - Đồng Hành <br />
                Trên Mọi Nẻo Đường
              </p>

              <img
                className="absolute w-[300px] h-px top-[125px] left-[477px] object-cover"
                alt="Line"
                src="https://c.animaapp.com/QeY2oEN3/img/line-16.svg"
              />
            </div>
          </div>

          <div className="absolute w-[1080px] h-[186px] top-[407px] left-[86px]">
            <div className="h-[186px] bg-white rounded-[30px] shadow-[0px_4px_15px_4px_#00000040]">
              <div className="relative w-[1000px] h-[86px] top-[50px] left-10">
                <img
                  className="absolute w-0.5 h-[85px] top-0 left-[310px]"
                  alt="Line"
                  src="https://c.animaapp.com/QeY2oEN3/img/line-2.svg"
                />

                <div className="absolute w-[148px] h-[85px] top-0 left-[854px]">
                  <div className="relative w-[146px] h-[85px] bg-[#5fcf86] rounded-[20px]">
                    <div className="absolute w-[104px] h-6 top-[31px] left-[22px] [font-family:'Roboto',Helvetica] font-medium text-white text-[32px] text-center tracking-[0.50px] leading-6">
                      Tìm xe
                    </div>
                  </div>
                </div>

                <div className="absolute w-[278px] h-[78px] top-2 left-0">
                  <div className="absolute w-[97px] h-6 top-0 left-0">
                    <div className="absolute w-[60px] h-6 top-0 left-[35px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0.50px] leading-6">
                      Địa chỉ
                    </div>

                    <div className="">
                      <svg
                        className="!absolute !w-[25px] !h-6 !top-0 !left-0"
                        fill="none"
                        height="24"
                        viewBox="0 0 25 24"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.6">
                          <path
                            d="M12.4382 22C12.1963 22 11.989 21.9333 11.8163 21.8C11.6435 21.6667 11.514 21.4917 11.4276 21.275C11.0994 20.3417 10.6848 19.4667 10.1838 18.65C9.70007 17.8333 9.0177 16.875 8.13667 15.775C7.25564 14.675 6.53872 13.625 5.98591 12.625C5.45038 11.625 5.18262 10.4167 5.18262 9C5.18262 7.05 5.88226 5.4 7.28155 4.05C8.69811 2.68333 10.417 2 12.4382 2C14.4594 2 16.1696 2.68333 17.5689 4.05C18.9855 5.4 19.6938 7.05 19.6938 9C19.6938 10.5167 19.3914 11.7833 18.7868 12.8C18.1995 13.8 17.5171 14.7917 16.7397 15.775C15.8068 16.975 15.0986 17.975 14.6149 18.775C14.1484 19.5583 13.7597 20.3917 13.4488 21.275C13.3624 21.5083 13.2242 21.6917 13.0342 21.825C12.8614 21.9417 12.6628 22 12.4382 22ZM12.4382 18.425C12.7319 17.8583 13.0601 17.3 13.4229 16.75C13.8029 16.2 14.3557 15.4667 15.0813 14.55C15.8241 13.6167 16.4287 12.7583 16.8952 11.975C17.3789 11.175 17.6207 10.1833 17.6207 9C17.6207 7.61667 17.1111 6.44167 16.0919 5.475C15.0899 4.49167 13.872 4 12.4382 4C11.0043 4 9.77781 4.49167 8.75858 5.475C7.75662 6.44167 7.25564 7.61667 7.25564 9C7.25564 10.1833 7.48885 11.175 7.95528 11.975C8.43899 12.7583 9.05225 13.6167 9.79509 14.55C10.5206 15.4667 11.0648 16.2 11.4276 16.75C11.8076 17.3 12.1445 17.8583 12.4382 18.425ZM12.4382 11.5C13.1637 11.5 13.777 11.2583 14.278 10.775C14.779 10.2917 15.0295 9.7 15.0295 9C15.0295 8.3 14.779 7.70833 14.278 7.225C13.777 6.74167 13.1637 6.5 12.4382 6.5C11.7126 6.5 11.0994 6.74167 10.5984 7.225C10.0974 7.70833 9.84691 8.3 9.84691 9C9.84691 9.7 10.0974 10.2917 10.5984 10.775C11.0994 11.2583 11.7126 11.5 12.4382 11.5Z"
                            fill="#1D1B20"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="absolute w-[245px] h-[42px] top-9 left-[35px]">
                    <div className="absolute w-[200px] h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0.50px] leading-6">
                      TP. Hà Nội
                    </div>

                    <div>
                      <svg
                        className="!absolute !w-[33px] !h-8 !top-2.5 !left-[210px]"
                        fill="none"
                        height="32"
                        viewBox="0 0 34 32"
                        width="34"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.9082 12L17.2003 20L25.4924 12"
                          stroke="#1E1E1E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute w-[513px] h-20 top-1.5 left-[327px]">
                  <p className="absolute w-[476px] h-[34px] top-[46px] left-[35px] [font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0.50px] leading-6">
                    21:00, 20/01/2025 - 20:00, 21/01/2025
                  </p>

                  <div className="absolute w-[140px] h-6 top-0 left-0">
                    <div className="absolute w-[103px] h-6 top-0 left-[35px] opacity-60 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0.50px] leading-6">
                      Ngày và giờ
                    </div>

                    <div>
                      <svg
                        className="!absolute !w-6 !h-6 !top-0 !left-0"
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2V5M16 2V5M3.5 9.09H20.5M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
