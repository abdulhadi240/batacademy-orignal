export const revalidate = 60; // Revalidate data every 60 seconds

export const dynamicParams = true;

// Fetch Metadata Dynamically
export async function generateMetadata({ params }) {
  const locale = params.locale || "en"; // Fallback to English if no locale is provided

  const product = await fetch(
    `${process.env.BACKEND_URL}/post-category/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
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
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      locale,
      site_name: "British Academy for Training & Development",
      description,
      url: `https://client-academy.vercel.app/blogs/${params.category}/category`,
      images: [product?.data?.featured_image],
    },
    twitter: {
      site_name: "British Academy for Training & Development",
      description,
      url: `https://client-academy.vercel.app/blogs/${params.category}/category`,
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
  const locales = ["en", "ar"]; // Supported locales
  const posts = await fetch(`${process.env.BACKEND_URL}/post/`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  // Check if `posts.data` is an array and generate paths correctly
  if (Array.isArray(posts?.data)) {
    return posts.data.flatMap((post) =>
      post.categories.flatMap((category) =>
        locales.map((locale) => ({
          locale,
          slug: category.slug, // Use the slug from each category
        }))
      )
    );
  }

  return []; // Return an empty array if posts data is not iterable
}


import React from 'react'
import Category from './Category';
import fetchData from '@/actions/server';

const page = async ({params}) => {
  const data = await fetchData(`/post-category/${params.id}` , params.locale)
  return (
    <div><Category params={params} data={data}/></div>
  )
}

export default page