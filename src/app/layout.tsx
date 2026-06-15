import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://francostoll.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Franco Stoll — Desarrollador Full Stack",
    template: "%s · Franco Stoll",
  },
  description:
    "Desarrollador Full Stack especializado en React, Next.js y Node.js. Construyo productos web rápidos, accesibles y bien diseñados.",
  keywords: [
    "Franco Stoll",
    "Desarrollador Full Stack",
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Franco Stoll", url: siteUrl }],
  creator: "Franco Stoll",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Franco Stoll — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Next.js y Node.js. Construyo productos web rápidos, accesibles y bien diseñados.",
    siteName: "Franco Stoll",
    images: [
      {
        url: "/assets/perfil.jpg",
        width: 400,
        height: 400,
        alt: "Franco Stoll",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franco Stoll — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Next.js y Node.js.",
    images: ["/assets/perfil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
