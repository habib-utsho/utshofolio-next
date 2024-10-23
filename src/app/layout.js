import { Providers } from "@/lib/providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habib Utsho",
  description: "Portfolio of Ahashan Habib Utsho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* For background */}
        <div className="main">
          <div className="gradient" />
        </div>

        <AntdRegistry>
          <main>
            <Providers>{children}</Providers>
          </main>
        </AntdRegistry>
      </body>
    </html>
  );
}
