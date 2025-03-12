import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";
import ArticleCard from "@/components/ArticleCard";
import fetchData from "@/actions/server";
import BlogCarousel from "@/components/BlogCarousel";

export async function generateMetadata({ params }) {
  const product =  await fetchData(`/post/${params.slug}`, params.locale);

  const title =
    product?.name || "British Academy for Training & Development";
  const description =
    product?.description ||
    "British Academy for Training & Development";
  const keywords =
    product?.keyword ||
    "British Academy for Training & Development";

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      locale:`${process.env.LOCALE_LANGUAGE}`,
      site_name: "British Academy for Training & Development",
      description: "British Academy for Training & Development",
      url: `https://client-academy.vercel.app/blogs/${params.slug}`,
      images: [product?.image],
    },
    twitter: {
      site_name: "British Academy for Training & Development",
      description: "British Academy for Training & Development",
      url: `https://client-academy.vercel.app/blogs/${params.slug}`,
      images: [
        {
          url: "/logobat.png",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      card: "summary_large_image",
      creator: "British Acadmey",
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetchData('/post','en')
  return posts.data.map((post) => ({
    id: post.id,
  }));
}

const BlogPost = async ({ params }) => {
  const data = await fetchData(`/post/${params.slug}`, params.locale);
  const blogs = await fetchData("/post?page=12", params.locale);
  return (
    <>
      <HeaderSection />
      <div className="p-4 md:mx-12 ">
        <div className="flex justify-center">
          <Image
            src={'/000.png'}
            alt="hero"
            height={800}
            width={800}
            className="w-full  rounded-3xl"
            priority
          />
        </div>
        <div className="md:px-4 md:py-8 pt-8 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <h1 className= {`text-2xl md:text-4xl ${params.locale === 'en' ? 'text-start md:w-[800px]' : 'text-end w-full'} font-bold `}>
              {data.name}
            </h1>
            {/** <div className="flex items-center mt-4 md:mt-0 md:ml-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/blog1.png"
                  alt={data.data.author}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  sizes="90vw"
                />
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-white/70">
                {data.data.author}
              </span>
              <div>- {data.data.published_date}</div>
            </div>*/}
          </div>
          <hr className="md:my-20 my-8" />
          <div
            className="md:mx-4 "
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </div>
        <div className={`${params.locale === 'en' ? 'flex justify-between' : 'flex justify-end'} `}>
          <h1 className="mt-10 mb-10 text-3xl font-bold tracking-wider">
          {params.locale === 'en' ? 'Latest Blog' : 'أحدث المدونات'}
          </h1>
        </div>
        <BlogCarousel data={blogs.data} blog params={params.locale}/>
      </div>
    </>
  );
};

export default BlogPost;
