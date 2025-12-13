import { VideoProvider } from "@/provider/VideoProvider";
import "../styles/index.scss";
import { DM_Sans, Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import { ParallaxProvider } from "@/provider/ParallaxProvider";

// Font loaders MUST be here
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>

      {/* Apply fonts here */}
      <body className={`${dmSans.variable} ${plusJakarta.variable} ${urbanist.variable}`}>
        <VideoProvider>
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
