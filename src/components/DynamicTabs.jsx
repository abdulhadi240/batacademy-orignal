'use client';
import Image from 'next/image';
import React, { useState } from 'react';
const tabsData = {
  en: [
    {
      id: 'videos',
      label: 'Videos',
      title: 'What Is Marketing?',
      description: 'Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.',
      image: '/g1.webp',
    },
    {
      id: 'careers',
      label: 'Careers',
      title: 'Career Opportunities in Marketing',
      description: 'Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.',
      image: '/g1.webp',
    },
    {
      id: 'blogs',
      label: 'Blogs',
      title: 'Marketing Blogs',
      description: 'Explore various blogs on marketing strategies, trends, and insights.',
      image: '/g1.webp',
    },
    {
      id: 'consultancy',
      label: 'Consultancy',
      title: 'Marketing Consultancy Services',
      description: 'Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.',
      image: '/g1.webp',
    },
    {
      id: 'workwithus',
      label: 'Work With Us',
      title: 'Join Our Marketing Team',
      description: 'Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.',
      image: '/g1.webp',
    },
  ],
  ar: [
    {
      id: 'videos',
      label: 'الفيديوهات',
      title: 'ما هو التسويق؟',
      description: 'التسويق هو أحد العلوم الإدارية الأكثر أهمية في جميع البلدان والمجالات الاقتصادية. شهدت أنشطة التسويق العديد من التطورات الملحوظة على مر السنين، وأصبح وظيفة التسويق وسيلة لضمان نجاح الأعمال واستدامتها في بيئة العمل.',
      image: '/g1.webp',
    },
    {
      id: 'careers',
      label: 'وظائف',
      title: 'فرص العمل في التسويق',
      description: 'التسويق هو أحد العلوم الإدارية الأكثر أهمية في جميع البلدان والمجالات الاقتصادية. شهدت أنشطة التسويق العديد من التطورات الملحوظة على مر السنين، وأصبح وظيفة التسويق وسيلة لضمان نجاح الأعمال واستدامتها في بيئة العمل.',
      image: '/g1.webp',
    },
    {
      id: 'blogs',
      label: 'مدونات',
      title: 'مدونات التسويق',
      description: 'استكشف مختلف المدونات حول استراتيجيات التسويق والاتجاهات والرؤى.',
      image: '/g1.webp',
    },
    {
      id: 'consultancy',
      label: 'استشارات',
      title: 'خدمات استشارات التسويق',
      description: 'التسويق هو أحد العلوم الإدارية الأكثر أهمية في جميع البلدان والمجالات الاقتصادية. شهدت أنشطة التسويق العديد من التطورات الملحوظة على مر السنين، وأصبح وظيفة التسويق وسيلة لضمان نجاح الأعمال واستدامتها في بيئة العمل.',
      image: '/g1.webp',
    },
    {
      id: 'workwithus',
      label: 'اعمل معنا',
      title: 'انضم إلى فريق التسويق لدينا',
      description: 'التسويق هو أحد العلوم الإدارية الأكثر أهمية في جميع البلدان والمجالات الاقتصادية. شهدت أنشطة التسويق العديد من التطورات الملحوظة على مر السنين، وأصبح وظيفة التسويق وسيلة لضمان نجاح الأعمال واستدامتها في بيئة العمل.',
      image: '/g1.webp',
    },
  ],
};
const WorkWithUsForm = ({ locale }) => {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [residence, setResidence] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('degree', degree);
    formData.append('residence', residence);
    formData.append('specialization', specialization);
    if (file) {
      formData.append('cv', file);
    }

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container sm:mx-auto sm:p-6">
      <form onSubmit={handleSubmit} className="w-full bg-white dark:bg-black sm:p-6">
        <div className="w-full mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="name">
            {locale === 'ar' ? 'الاسم' : 'Name'}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="degree">
            {locale === 'ar' ? 'أعلى درجة علمية' : 'The highest scientific degree'}
          </label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="residence">
            {locale === 'ar' ? 'مكان الإقامة' : 'Place of residence'}
          </label>
          <input
            type="text"
            id="residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="specialization">
            {locale === 'ar' ? 'التخصص' : 'Specialization'}
          </label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <button type="submit" className="bg-[#152765] text-white text-sm font-light py-2 px-4 rounded-lg">
            {locale === 'ar' ? 'قبول' : 'Accept'}
          </button>
          <button type="button" className="bg-[#152765] text-white text-sm font-light py-2 px-4 rounded-lg">
            {locale === 'ar' ? 'تحميل السيرة الذاتية' : 'Upload CV'}
          </button>
        </div>
      </form>
    </div>
  );
};

const DynamicTabs = ({ locale }) => {
  const [activeTab, setActiveTab] = useState('videos');

  const activeContent = tabsData[locale].find((tab) => tab.id === activeTab);

  return (
    <section className="py-6 overflow-hidden">
      <div className="container">
        <nav className="rounded-xl flex justify-center text-center w-auto">
          <div className="flex justify-center text-center shadow-md p-3 sm:p-3">
            <div className="flex flex-wrap gap-6 justify-center">
              {tabsData[locale].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-6 text-center rounded-lg text-sm ${
                    activeTab === tab.id ? 'bg-[#B12E33] text-white' : 'bg-[#152765] text-white'
                  }`}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {activeContent ? (
          <div className="p-8 text-gray-900 dark:text-white">
            <h2 className="text-3xl text-center md:text-start">{activeContent.title}</h2>
            <div className="flex flex-wrap">
              <div className="w-full mt-4 sm:w-1/2">
                <p className="text-lg mt-4 mr-4 ">{activeContent.description}</p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <Image src={activeContent.image} alt="Marketing" width={480} height={360} />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-white">Content not found</div>
        )}
      </div>
    </section>
  );
};

export default DynamicTabs;
