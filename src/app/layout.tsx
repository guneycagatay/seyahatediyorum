import type { Metadata } from "next";
import "./globals.css";
import ClientLogic from "@/components/ClientLogic";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
    title: "SeyahatEdiyorum.com | Profesyonel Vize Danışmanlık",
    description: "SeyahatEdiyorum.com ile vize süreçlerinizi hızlandırın ve kolaylaştırın.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
            </head>
            <body>
                <ClientLogic />
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </body>
        </html>
    );
}
