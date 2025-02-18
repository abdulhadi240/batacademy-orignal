import Footer from "@/components/Footer";
import "./globals.css";


export default async function RootLayout({ children , params }) {
  const locale = await params
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <body
        className={`antialiased text-black dark:text-white`}
      >
        {children}
        <Footer params={params.locale}/>
      </body>
    </html>
  );
}
