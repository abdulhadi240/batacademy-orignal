'use client';

import React, { useState, useEffect } from 'react';

const publicationsData = {
  en: {
    blog: [
      {
        title: 'The Hidden Dangers of Productivity Overload',
        content: "In today's fast-paced world, success is often measured by how much work you can complete. Social media, the gig economy, and 'hustle' culture constantly push people to always be productive. However, overworking can lead to burnout, mental exhaustion, and decreased overall well-being. The British Academy for Training and Development offers management courses to help individuals find balance in their professional lives. This blog explores the negative effects of toxic productivity and strategies to overcome them.",
        image: '/blog_home.webp',
      },
    ],
    "Academy News": [
      {
        title: 'New Business Leadership Program in Riyadh',
        content: 'The British Academy for Training has introduced a high-level Business Leadership Program in Riyadh. This initiative aims to equip professionals with advanced management and strategic planning skills to navigate the evolving corporate landscape in Saudi Arabia. With an expert-led curriculum, the program focuses on modern leadership techniques essential for businesses to thrive in a competitive environment.',
        image: '/123.png',
      },
    ],
    advertisement: [
      {
        title: 'Exclusive Training Programs in the UAE',
        content: 'The British Academy for Training offers specialized courses in Contract Management, Legal Disputes, and Business Negotiations. These programs are tailored to help professionals enhance their skills in handling legal and regulatory challenges in corporate environments. The UAE continues to grow as a global business hub, making these training opportunities more valuable than ever.',
        image: '/advert.jpg',
      },
    ],
    careers: [
      {
        title: 'Remote Job Opportunities in Administration & Customer Service',
        content: "The rise of remote work has opened new doors for professionals seeking flexibility. Companies worldwide are now hiring remote administrative and customer service specialists to handle core operations. This job role offers individuals the opportunity to work from home while managing office functions and providing excellent customer support. Learn more about how you can transition into a remote role and advance your career.",
        image: '/career.webp',
      },
    ],
    video: [
      {
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video link
      },
    ],
  },
  ar: {
    "المدونات": [
      {
        title: 'المخاطر الخفية للإفراط في الإنتاجية',
        content: "في العالم السريع اليوم، يُقاس النجاح غالبًا بكمية العمل الكامل. وسائل التواصل الاجتماعي، اقتصاد العمل الجانبي، وثقافة 'الجهد' تدفع الناس دائمًا للإنتاجية. ومع ذلك، يمكن أن يؤدي الإفراط في العمل إلى الإرهاق، والإنهاك العقلي، وانخفاض الرفاهية العامة. يقدم الأكاديمية البريطانية للتدريب دورات إدارة لمساعدة الأفراد على العثور على التوازن في حياتهم المهنية. يستكشف هذا المدونة الآثار السلبية للإنتاجية السامة واستراتيجيات التغلب عليها.",
        image: '/blog_home.webp',
      },
    ],
    "أخبار الأكاديمية": [
      {
        title: 'برنامج جديد لقيادة الأعمال في الرياض',
        content: 'قدمت الأكاديمية البريطانية للتدريب برنامجًا عالي المستوى لقيادة الأعمال في الرياض. هدف هذه المبادرة هو تزويد المحترفين بمهارات الإدارة المتقدمة والتخطيط الاستراتيجي لتصفح المنظر التنظيمي المتطور في المملكة العربية السعودية. مع منهج مقود من الخبراء، يركز البرنامج على تقنيات القيادة الحديثة التي تكون ضرورية لنجاح الأعمال في بيئة تنافسية.',
        image: '/123.png',
      },
    ],
    "إعلانات": [
      {
        title: 'برامج تدريبية حصرية في الإمارات',
        content: 'تقدم الأكاديمية البريطانية للتدريب دورات متخصصة في إدارة العقود، والنزاعات القانونية، ومفاوضات الأعمال. هذه البرامج مصممة لتعزيز مهارات المحترفين في التعامل مع التحديات القانونية والتنظيمية في البيئات التجارية. تواصل الإمارات العربية المتحدة نموها كمركز عالمي للأعمال، مما يجعل هذه الفرص التدريبية أكثر قيمة من أي وقت مضى.',
        image: '/advert.jpg',
      },
    ],
    "وظائف": [
      {
        title: 'فرص عمل عن بعد في الإدارة والخدمة العملاء',
        content: "ارتفاع العمل عن بعد قد فتح أبوابًا جديدة للمحترفين الباحثين عن المرونة. تستأجر الشركات في جميع أنحاء العالم الآن متخصصين في الإدارة والخدمة العملاء عن بعد للتعامل مع العمليات الأساسية. يقدم هذا الدور الوظيفي للأفراد فرصة العمل من المنزل مع إدارة وظائف المكتب وتقديم دعم عملاء ممتاز. تعرف على المزيد حول كيفية التحول إلى دور عن بعد وتقدم مسيرتك المهنية.",
        image: '/career.webp',
      },
    ],
    "فيديو": [
      {
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video link
      },
    ],
  }
};

const Publications = ({locale}) => {
  const [selectedCategory, setSelectedCategory] = useState('blog');
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const data = publicationsData[locale];

  useEffect(() => {
    const categories = Object.keys(data);
    let index = categories.indexOf(selectedCategory);

    const interval = setInterval(() => {
      index = (index + 1) % categories.length; // Loop through sections
      setSelectedCategory(categories[index]);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [selectedCategory, data]);

  return (
    <div className="md:px-32 px-4 mt-4" dir={dir}>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 md:mb-8">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`px-4 py-1 text-sm md:text-sm rounded-md ${
              selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sliding Content Animation */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 mt-10"
            style={{
              transform: `translateX(${locale === 'ar' ? '' : '-'}${
                Object.keys(data).indexOf(selectedCategory) * 100
              }%)`,
            }}
          >
            {Object.entries(data).map(([category, items]) => (
              <div key={category} className="flex flex-col min-w-full space-y-6">
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg gap-6">
                    {/* Image or Video Display */}
                    {item.image && (
                      <img src={item.image} alt={item.title} className="w-full md:w-2/5 rounded-md object-cover" />
                    )}
                    {item.video && (
                      <iframe
                        src={item.video}
                        className="w-full md:w-full rounded-md"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}

                    {/* Content Section */}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                      {item.content && <p className="text-gray-600 tracking-wider">{item.content}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;