
const Card = ({ image, title, description, link }) => {
  return (
    // <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    //   <img
    //     src={image}
    //     alt={title}
    //     className="w-full h-48 object-cover"
    //   />
    //   <div className="p-5">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    //     <p className="text-gray-600 mb-4">{description}</p>
    //     <a
    //       href={link}
    //       className="block text-center bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700"
    //     >
    //       Explore courses
    //     </a>
    //   </div>
    // </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
  <img
    src={image}
    alt={title}
    className="w-full h-48 object-cover"
  />
  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      className="block text-center bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Explore courses
    </a>
  </div>
</div>

  );
};

export default Card;