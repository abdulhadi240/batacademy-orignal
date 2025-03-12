import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ title, category, date, params, description, imageSrc, button_data, slug, blog }) => {
  const isArabic = params === 'ar';

  const translations = {
    readMore: isArabic ? 'اقرأ المزيد' : 'Read More',
    technology: isArabic ? 'تكنولوجيا' : 'Technology'
  };

  return (
    <div>
      {blog ? (
        <div className={`overflow-hidden group hover:scale-95 scale-90 transition-all bg-[#F9F9F9] md:p-2 rounded-lg shadow-lg ${blog ? 'h-[400px]' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
          <Link href={`/${params}/post/${slug}`}>
            <div className="relative h-40 m-3 md:h-48">
              <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className={`absolute bottom-0 ${isArabic ? 'right-0' : 'left-0'} flex justify-start gap-3 p-2`}>
                <div className="z-10 py-2 font-medium text-xs px-5 dark:text-black bg-[#F9F9F9] rounded-full">
                  {button_data}
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className={`flex ${isArabic ? 'justify-end' : ''} items-center space-x-2 text-sm text-gray-500`}>
                <span className='text-xs'>{date}</span>
              </div>
              <div className={`flex flex-col gap-3 mb-4 ${isArabic ? 'items-end text-right' : ''}`}>
                <h3 className="mt-2 text-xl font-semibold dark:text-black line-clamp-2">{title}</h3>
                <p
                  className="mt-2 text-sm text-gray-600 dark:text-black/70 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: description || '' }}
                ></p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className={`overflow-hidden group hover:scale-105 transition-all bg-[#F9F9F9] p-2 rounded-lg shadow-lg ${blog ? 'h-[400px]' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
          <div className="relative h-40 m-3 md:h-48">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className={`absolute bottom-0 ${isArabic ? 'right-0' : 'left-0'} flex justify-start gap-3 p-2`}>
              <div className="z-10 py-2 font-medium text-xs px-5 dark:text-black bg-[#F9F9F9] rounded-full">
                {button_data || translations.technology}
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className={`flex ${isArabic ? 'justify-end' : ''} items-center space-x-2 text-sm text-gray-500`}>
              <span className='text-xs'>{date}</span>
            </div>
            <div className={`flex flex-col gap-3 mb-4 ${isArabic ? 'items-end text-right' : ''}`}>
              <h3 className="mt-2 text-xl font-semibold dark:text-black line-clamp-2">{title}</h3>
              <p
                className="mt-2 text-sm text-gray-600 dark:text-black/70 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: description || '' }}
              ></p>

              <Link
                href={`/${params}/post/${slug}`}
                className="block mt-3 text-xs text-black underline hover:text-primary hover:underline"
              >
                {translations.readMore}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
