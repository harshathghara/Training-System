import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import GoogleOAuthProviderWrapper from "../contexts/GoogleOAuthProvider";
import GlobalAuthModal from "../components/layout/GlobalSignupModal";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Skill Academy - Learn AI, Cloud Computing & Cybersecurity",
  description: "Master AI, cloud computing, and cybersecurity with hands-on courses designed to get you hired. Join 100,000+ learners mastering AI-era skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProviderWrapper>
          <AuthProvider>
            <main className="min-h-screen">
              {children}
            </main>
                            <GlobalAuthModal />
          </AuthProvider>
        </GoogleOAuthProviderWrapper>
      </body>
    </html>
  );
}
