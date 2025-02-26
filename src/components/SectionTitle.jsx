// components/SectionTitle.js
const SectionTitle = ({ title, highlight , start }) => {
  return (
    <h2 className={`my-6 text-3xl font-bold ${start ? 'md:text-start text-center' : 'text-center'} text-gray-800 dark:text-white`}>
      {title} <span className="text-[#B12E33] uppercase">{highlight}</span>
      <div className={`w-16  ${start ? 'hidden' : 'mx-auto'} mt-2 border-b-4 border-[#B12E33]`}></div>
    </h2>
  );
};

export default SectionTitle;