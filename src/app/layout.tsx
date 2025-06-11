import "./globals.css";
import { Header } from '../component/header'
import { Footer } from '../component/Footer'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Embrace Family',
  description: 'An app connecting loving families with expecting mothers for ethical and responsible adoption support',
  openGraph: {
    title: 'Embrace Family',
    description: 'An app connecting loving families with expecting mothers for ethical and responsible adoption support',
    images: []
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>

        {/*<Header />*/}

        {children}

        {/*<Footer />*/}
        <Footer />

      </body>
    </html>
  );
}
