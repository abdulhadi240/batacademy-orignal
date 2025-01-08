"use client"; // This is required to make sure the code is rendered on the client-side.

import { useRouter } from 'next/navigation'; // Next.js 13 uses next/navigation for routing

const Card = ({ imageUrl, title, courseLink, dates }) => {
  const router = useRouter(); // Using useRouter directly from next/navigation in Next.js 13

  const handleDetailsClick = () => {
    // Navigate to the course details page
    router.push(courseLink);
  };

  const handleRegisterClick = () => {
    // Navigate to the registration page (appends "/register" to the courseLink)
    router.push(`${courseLink}/register`);
  };

  return (
    <div className="relative b border bg-transparent rounded-lg overflow-hidden w-full h-[350px] m-2 group">
      {/* Image Section */}
      <div className="relative w-full h-2/3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay on Hover for "View Details" */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={handleDetailsClick} // Navigate to the course details page
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 h-1/3 flex flex-col justify-between">
        <h3 className="text-md font-semibold text-gray-800 truncate">{title}</h3>

        {/* Dates Section */}
        {dates && dates.length > 0 ? (
          <div className="text-sm text-gray-600 mt-2">
            <span className="font-medium text-gray-700">Dates: </span>
            <ul className="list-disc pl-4">
              {dates.map((date, index) => (
                <li key={index} className="mt-1">
                  {new Date(date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-sm text-gray-500 mt-2">No dates available</div>
        )}

        {/* Register button */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleRegisterClick} // Navigate to register page
            className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
