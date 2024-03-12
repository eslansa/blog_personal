import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Provider } from "@/utils/Provider";
import Footer from "@/components/Footer";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata : Metadata = {
  generator: 'Next.js',
  applicationName: 'Eslán | Blog',
  referrer: 'origin-when-cross-origin',
  keywords: ['Eslán', 'eslansa', 'Blog', 'web', 'Sánchez', 'dev'],
  authors: [{ name: 'Eslán' }, { name: 'Sánchez', url: 'https://eslan.pages.dev' }],
  creator: 'Eslán Sánchez',
  publisher: 'Eslan Sanchez',
  formatDetection: {
     email: true,
     address: false,
     telephone: false,
  },
  title: {
     template: 'Eslán | Blog',
     default: 'Eslan Sanchez', // a default is required when creating a template
  },
  openGraph: {
     title: 'Eslán | Blog',
     description: "Eslán Sánchez Alvarez descubre el blog de , donde encontrarás artículos, información y más sobre el mundo web.",
     url: 'https://eslan.pages.dev',
     siteName: 'Eslan Sanchez',
     images: [
      {
        url: 'https://eslan.pages.dev/_next/image?url=%2Favatar.webp&w=1920&q=70', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://eslan.pages.dev/_next/image?url=%2Favatar.webp&w=1920&q=70', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Avatar',
      },
    ],
    locale: 'es_ES',
    type: 'website',
    },
  verification: {
     google: '7pY3HSqGDEy_LyhtYnPQmWomQGWQkC740Gmb9Qk6_FI',
  },
 };
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-red-500`}>
        <Provider>
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
