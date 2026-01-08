import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Import standard Next.js fonts
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "FORTICAR - El Motor que Impulsa la Eficiencia de tu Taller",
  description: "Plataforma SaaS integral para la administración y optimización de talleres mecánicos, centros de colisión y servicios automotrices.",
  openGraph: {
    title: "FORTICAR - Software de Gestión para Talleres Mecánicos",
    description: "Plataforma SaaS integral para la administración y optimización de talleres mecánicos, centros de colisión y servicios automotrices.",
    type: "website",
    images: [{ url: "/images/opengraph.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "FORTICAR - Software de Gestión para Talleres Mecánicos",
    description: "Control total de inventarios, órdenes de servicio y clientes en una sola plataforma en la nube.",
    images: ["/images/opengraph.png"] // Updated to local public path if applicable or keep external if needed, assuming /images exists in public now
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
