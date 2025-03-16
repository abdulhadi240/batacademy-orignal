import Link from "next/link"
import Image from "next/image"
import { SignUpForm } from "@/components/SignUpForm"
import fetchData from "@/actions/server";
import HeaderSection from "@/components/HeaderSection";

export default async function page({ params }) {
  const response = await fetchData('/country/list', params.locale);
  console.log(response);

  const isArabic = params.locale === "ar";

  return (
    <>
      <HeaderSection params={params.locale} />
      <div
        className="container flex min-h-screen w-full flex-col items-center justify-center px-4 py-10"
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[600px]">
          {/* Image Section moved to the top */}
          <div className="flex justify-center">
            <div className="">
              <Image
                src="/logobat.png"
                alt="signin"
                className="rounded-3xl"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              {isArabic ? "إنشاء حساب" : "Create an account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? "املأ بياناتك لإنشاء حساب جديد"
                : "Fill in your details to create a new account"}
            </p>
          </div>
          <SignUpForm locale={params.locale} country={response} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {isArabic ? "هل لديك حساب بالفعل؟" : "Already have an account?"}{" "}
            <Link
              href={`/${params.locale}/sign-in`}
              className="underline underline-offset-4 hover:text-primary"
            >
              {isArabic ? "تسجيل الدخول" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
