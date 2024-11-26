import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { AuthProvider } from '@/components/auth/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FolkTune - Learn Folk Music',
  description: 'Learn folk music through interactive lessons and cultural context',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}