import React from "react";

const CourseVideoCard = () => {
  return (
    <div className=" bg-white overflow-hidden">
      {/* Card Title */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-black">Course Video</h2>
      </div>

      {/* Video Section */}
      <div className="px-6 pb-4">
        <div className="relative">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/xSlh9TYJnjA"
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoCard;
