import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edemic Pets — Why won't your dog eat?",
  description:
    "Most picky eaters fall into 1 of 4 types. Find your dog's type in 60 seconds — and get free nutrition guides plus 1:1 chat mentorship from an Aussie canine nutritionist.",
  metadataBase: new URL("https://edemic.com.au"),
  openGraph: {
    title: "Edemic Pets — Why won't your dog eat?",
    description:
      "Most picky eaters fall into 1 of 4 types. Take the free 60-second quiz.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
