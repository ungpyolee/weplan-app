import type { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/globals.css';
import BottomNavBar from '@/components/layout/BottomNavBar';

export const metadata: Metadata = {
    title: 'WEPLAN',
    description: 'Our Shared Planner, WEPLAN',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <BottomNavBar />
            </body>
        </html>
    );
}
