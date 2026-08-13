import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import FinisherBackground from "@/components/FinisherBackground";
import { Toaster } from "react-hot-toast";
import EnhancedChatbot from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor.tsx"

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rishi Portfolio",
  description: "Rishi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} ${spaceGrotesk.variable} ${dmSans.variable} h-full`}>
        <CustomCursor />
        <div className="relative min-h-screen w-full flex flex-col antialiased">
          {/* Animated Finisher Header */}
          <FinisherBackground />

          {/* Main Content */}
          <div className="relative z-10 flex-grow">
            {children}
          </div>

          <EnhancedChatbot />
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            toastOptions={{
              style: { background: '#5A72A0', color: '#FDFFE2' },
            }}
          />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
