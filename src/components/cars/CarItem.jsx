import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CarItem({ car = {} }) {
  const searchInfor = useSelector((state) => state.search);

  return (
    <>
      <Link to={`/cars/${car?.id}`}>
        <div className="absolute w-[298px] h-[338px] top-[558px] left-[1043px]">
          <div className="relative w-[300px] h-[338px]">
            <div className="absolute w-[300px] h-[338px] top-0 left-0">
              <div className="relative w-[298px] h-[338px] bg-white rounded-[30px] border border-solid border-[#00000080] shadow-[0px_4px_5px_#0000001a]">
                <div className="absolute w-[94px] h-[30px] top-[191px] left-2">
                  <div className="relative w-[92px] h-[30px] bg-[#d9d9d9fa] rounded-[84px]">
                    <div className="absolute top-2 left-[15px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                      Số tự động
                    </div>
                  </div>
                </div>

                <div className="absolute top-[235px] left-2 [font-family:'Inter',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {car?.name}
                </div>

                <div className="absolute w-[187px] h-[15px] top-[260px] left-2">
                  <LocationOn1 className="!absolute !w-3 !h-3 !top-px !left-0" />
                  <p className="absolute top-0 left-4 [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    {car?.address}
                  </p>
                </div>

                <img
                  className="absolute w-[281px] h-0.5 top-[285px] left-2 object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/TzXYRGLE/img/line-3-7.svg"
                />

                <div className="absolute w-[120px] h-4 top-[298px] left-2">
                  <StarFilled
                    className="!absolute !w-4 !h-4 !top-0 !left-0"
                    color="#FFCC00"
                  />
                  <div className="h-[15px] top-px left-4 [font-family:'Inter',Helvetica] text-xs tracking-[0] leading-[normal] absolute font-normal text-black">
                    {car?.rating}
                  </div>

                  <div className="absolute h-[15px] top-px left-[58px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    10 chuyến
                  </div>

                  <DirectionsCar8 className="!absolute !w-4 !h-4 !top-0 !left-[42px]" />
                  <img
                    className="absolute w-[3px] h-[3px] top-[7px] left-9"
                    alt="Ellipse"
                    src="https://c.animaapp.com/TzXYRGLE/img/ellipse-1-7.svg"
                  />
                </div>

                <div className="absolute w-[77px] h-[19px] top-[297px] left-[216px]">
                  <div className="absolute h-[15px] top-0.5 left-[41px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    /ngày
                  </div>

                  <div className="absolute h-[19px] top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#5fcf86] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {currencyFormat(
                      ((car?.basePrice ?? 0) * MULTIPLIED_AMOUNT) / 1000,
                      "VND",
                      false
                    )}
                    K
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute w-[281px] h-[168px] top-2.5 left-[9px]"
              alt="Car image"
              src={car?.images?.[0]?.imageUrl}
            />
            {/* <ImageSlider
          images={car?.images}
          className="absolute w-[281px] h-[168px] top-2.5 left-[9px]"
        /> */}
          </div>
        </div>
      </Link>
    </>
  );
}
