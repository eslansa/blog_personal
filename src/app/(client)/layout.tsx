import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Provider } from "@/utils/Provider";
import Head from "next/head";
import Footer from "@/components/Footer";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eslansaBlog",
  description: "Blog de Eslán Sánchez Alvarez, artículos, información y más sobre el mundo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}>
        <Provider>
          <Head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
          </Head>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
