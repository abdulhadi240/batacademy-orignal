import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/components/context/AuthContext";

export default async function RootLayout({ children , params }) {
  const {locale} =  params
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
    <AuthProvider locale={locale}>
      <body
        className={`antialiased text-black dark:text-white`}
      >
        {children}
        <Footer params={params}/>
        <ToastContainer  />
      </body>
      </AuthProvider>
    </html>
  );
}
