import { Link } from "react-router-dom";

const ImageWithText = ({ img, title, subtitle, excss, link }) => {
  return (
    <div
      className={`h-[450px] w-full bg-no-repeat bg-center bg-cover p-10 flex items-center bg-blend-darken ${
        excss || ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(65, 65, 65, 0.678), rgba(71, 71, 71, 0.404)), url(${img})`,
        willChange: "transform", // Optional optimization
      }}
    >
      <div className="text-white grid gap-2 max-w-xl">
        <p className="font-bold text-xl md:text-2xl">{title}</p>
        <p className="text-lg md:text-xl">{subtitle}</p>
        {link && (
          <Link className="slide-btn-next" to="">
            <span>{link}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageWithText;
