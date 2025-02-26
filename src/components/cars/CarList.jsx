import CarItem from "./CarItem";

export default function CarList({ cars = [] }) {
  return (
    <div>
      <div className="bg-[#d9d9d94c]">
        <div className="relative top-14 justify-items-center">
          <div className="absolute h-6 top-0 items-center [font-family: 'Roboto-Regular', Helvetica] font-normal text-black text-xl tracking-[0.50px] leading-6 whitespace-nowrap">
            Danh sách xe cho bạn
          </div>
          <div className="absolute top-24 left-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {cars.map((item, index) => (
                <CarItem key={item?.id || index} car={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
