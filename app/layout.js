import { Geist, Geist_Mono, Poppins, Spline_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Aeonik is a custom font - using a similar Google Font as fallback
// If you have Aeonik font files, place them in /public/fonts/ and uncomment below:
// const aeonik = localFont({
//   src: [
//     { path: '../public/fonts/Aeonik-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '../public/fonts/Aeonik-Medium.woff2', weight: '500', style: 'normal' },
//     { path: '../public/fonts/Aeonik-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-aeonik',
// });

export const metadata = {
  title: "Hygrix - Health & Wellness",
  description: "Your trusted partner in health and wellness products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${splineSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
