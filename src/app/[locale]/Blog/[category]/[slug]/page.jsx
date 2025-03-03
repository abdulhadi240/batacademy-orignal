import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import ArticleCard from "../../ArticleCard";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";

export async function generateMetadata({ params }) {
  const product = await fetch(
    `${process.env.BACKEND_URL}/post/${params.slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${params.locale}`,

      },
    }
  ).then((res) => res.json());

  const title =
    product?.data?.meta_title || "British Academy for Training & Development";
  const description =
    product?.data?.meta_description ||
    "British Academy for Training & Development";
  const keywords =
    product?.data?.meta_keywords ||
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
      images: [product?.data[0]?.image],
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
  const posts = await fetch(`${process.env.BACKEND_URL}/post/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `en`,

    },
  }).then((res) => res.json());
  return posts.data.data.map((post) => ({
    id: post.id,
  }));
}

const BlogPost = async ({ params }) => {
  const data = await fetch(`${process.env.BACKEND_URL}/post/${params.slug}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${params.locale}`,

    },
  }).then((res) => res.json());

  const blogs = await fetch(`${process.env.BACKEND_URL}/post/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${params.locale}`,

    },
  }).then((res) => res.json());

  return (
    <>
      <HeaderSection />
      <div className="p-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex justify-center">
          <Image
            src={data.data.featured_image}
            alt="hero"
            height={800}
            width={800}
            className="w-full h-auto rounded-3xl"
            priority
          />
        </div>
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <h1 className="text-2xl md:text-4xl font-bold md:w-[500px]">
              {data.data.title}
            </h1>
            <div className="flex items-center mt-4 md:mt-0 md:ml-4">
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
<div className="flex flex-col ml-2">
              <div className=" text-sm text-gray-600 dark:text-white/70">
                {data.data.author || 'Author Name'}
              </div>
              <div> {data.data.published_date || '25 feb 2025'}</div>
              </div>
            </div>
          </div>
          <hr className="my-20" />
          <div
            className="mx-4 "
            dangerouslySetInnerHTML={{ __html: data.data.content }}
          ></div>
        </div>
        <div className="flex justify-between">
          <h1 className="mt-10 mb-10 text-3xl font-bold tracking-wider">
            Latest Blog
          </h1>
        </div>
        {/** 
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {blogs.data.data.map((article, index) => (
         <ArticleCard
         key={index}
         title={article.name}
         category={params.category }
         date={article.published_date}
         description={article.content}
         imageSrc={article.image}
         button_data={article.tags || ['Latest', 'Trending']}                slug={article.slug}
         params={params.category}
       />
       ))} 
       
        </div>*/}
      </div>
    </>
  );
};

export default BlogPost;
