const ShoppingQuotes = ({ img, qoutes }) => {
    return (
      <div
        className="px-6 md:px-16 lg:px-28 text-center h-[50vh] flex items-center justify-center bg-blend-darken bg-cover bg-no-repeat bg-right bg-scroll select-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.678), rgba(255, 255, 255, 0.404)), url(${img})`,
          willChange: "transform", // Hint for smooth rendering
        }}
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          {qoutes}
        </p>
      </div>
    );
  };
  
  export default ShoppingQuotes;
  