import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/components/context/AuthContext";

export default async function RootLayout({ children , params }) {
  const locale = await params
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
    <AuthProvider>
      <body
        className={`antialiased text-black dark:text-white`}
      >
        {children}
        <Footer params={params.locale}/>
        <ToastContainer  />
      </body>
      </AuthProvider>
    </html>
  );
}
