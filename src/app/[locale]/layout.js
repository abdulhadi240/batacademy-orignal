import Footer from "@/components/Footer";
import "./globals.css";


export default function RootLayout({ children , params }) {

  return (
    <html lang="en">
      <body
        className={`antialiased text-black dark:text-white`}
      >
        {children}
        <Footer params={params.locale}/>
      </body>
    </html>
  );
}
