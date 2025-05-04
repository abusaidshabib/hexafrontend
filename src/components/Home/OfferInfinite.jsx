import Marquee from "react-fast-marquee";
import { IoMdStar } from "react-icons/io";

const OfferInfinite = () => {
  const array = [
    "✷ Flat 50% Off",
    "✦ Black Friday Deals",
    "✷ Flat 50% Off",
    "✦ Black Friday Deals",
    "✷ Flat 50% Off",
    "✦ Black Friday Deals",
  ];
  return (
    <div className="bg-[#C8102E] py-1 text-white font-medium text-sm overflow-hidden">
      <Marquee gradient={false} speed={30} direction="right">
        {array?.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6"
          >
            <span>{data}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default OfferInfinite;