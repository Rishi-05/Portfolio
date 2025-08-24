import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FinisherBackground from "@/components/FinisherBackground";
import { Toaster } from "react-hot-toast";
import EnhancedChatbot from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} h-full`}>
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
