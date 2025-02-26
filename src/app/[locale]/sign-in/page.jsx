import Design from "@/app/homepage1/components/Design";
import AuthForm from "@/components/AuthForm";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";

const Page = ({params}) => {
  return (
    <>
            <HeaderSection params={params.locale} />

      <section className="flex justify-center mt-10 size-full rounded-3xl max-sm:px-6">
        <Image
          src="/sign.webp"
          alt="signin"
          className="hidden h-[400px] w-[400px] m-20 rounded-3xl md:block"
          layout="responsive" // Use intrinsic layout to manage dimensions through the CSS
          height={300} // These values are optional but can help with preloading
          width={300}
        />

        <div className="flex flex-col items-center justify-center gap-3 md:mx-20">
          <div className="flex justify-center mt-2">
            <Image src="/logocrown.webp" width={200} height={200} alt="logo" />
          </div>
          <div className="flex justify-center mb-10 ">
            <AuthForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
