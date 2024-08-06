import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Laimunati Group",
    template: "%s | Laimunati Group"
  },
  description: "Laimunati Group is a dynamic conglomerate excelling in Building Construction, Real Estate, Energy, Investment, and Technology sectors. Our diverse ventures encompass innovative solutions in Information and Communication Technology (ICT), Oil and Gas, Renewable Energy, Environmental Management, Import/Export, and more. With a commitment to excellence and sustainable growth, we inspire progress and shape a brighter future for Africa. Join us on this exciting journey of empowerment and visionary success.",
  icons: {
    icon: "./Resources/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        <main id="root">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
