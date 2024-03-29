import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Expat",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/light-mode-2.svg",
        href: "/light-mode-2.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/drk-mode.svg",
        href: "/drk-mode.svg",
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       <ConvexClientProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="expat-theme-2"
        >
          <Toaster position="bottom-center"/>
          <ModalProvider/>
          {children}
        </ThemeProvider>
       </ConvexClientProvider>
      </body>
    </html>
  );
}
