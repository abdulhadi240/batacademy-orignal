import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "@/components/LoginForm"
import HeaderSection from "@/components/HeaderSection"

export default function page({ params }) {
  const isArabic = params.locale === "ar";

  return (
    <>
      <HeaderSection params={params.locale} />
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="container flex min-h-screen w-full flex-col items-center justify-center px-4 py-10"
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {/* Image Section moved to the top and made larger */}
          <div className="flex justify-center">
            <div className="">
              <Image
                src="/logobat.png"
                alt="signin"
                className="rounded-3xl"
                layout="responsive"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {isArabic ? "تسجيل الدخول" : "Login"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? "أدخل بياناتك لتسجيل الدخول إلى حسابك"
                : "Enter your credentials to sign in to your account"}
            </p>
          </div>
          <LoginForm locale={params.locale} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {isArabic ? "ليس لديك حساب؟ " : "Don't have an account? "}
            <Link
              href={`/${params.locale}/sign-up`}
              className="underline underline-offset-4 hover:text-primary"
            >
              {isArabic ? "إنشاء حساب" : "Sign up"}
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
