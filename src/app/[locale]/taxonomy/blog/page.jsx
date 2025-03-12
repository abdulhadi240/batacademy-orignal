// pages/index.js
import fetchData from "@/actions/server";
import ArticleCard from "@/components/ArticleCard";
import HeaderSection from "@/components/HeaderSection";
import { Calendar, Facebook, FileText, Play, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // Revalidate data every 60 seconds

export const dynamicParams = true;

// Fetch Metadata Dynamically
export async function generateMetadata({ params }) {
  const locale = params.locale || "en"; // Fallback to English if no locale is provided

  const product = await fetch(`${process.env.BACKEND_URL}/post`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  }).then((res) => res.json());

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
      creator: "British Academy",
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

// Main Page Component with SSR
export default async function Page({ params }) {
  const locale = params.locale || "en"; // Determine locale from params
  const articles = await fetchData("/post?page=12", locale);
  const category = await fetchData("/post-category", locale);

  return (
    <div>
      <HeaderSection />
      <main className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar with Categories */}
        <aside className="md:col-span-1 sticky top-10 h-screen overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold border-b border-gray-100 pb-3 mb-4">
              CATEGORIES
            </h2>
            <nav className="space-y-3">
              {category?.data.map((item, index) => (
                <Link
                  key={index}
                  href={`/${params.locale}/taxonomy/blog/${item.id}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {articles?.data.map((article, index) => (
            <div key={index} className="w-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {article.name}
                  </h1>
                  <div className="flex items-center text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <time dateTime="2024-10-07">{article.publish_date}</time>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="prose max-w-none">
                        <p className="text-gray-600">{article.description}</p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/${params.locale}/post/${article.slug}`}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
                        >
                          More
                        </Link>
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.name}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}