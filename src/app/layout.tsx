import classNames from "classnames";
import "~/styles/globals.css";
import { Fira_Code, Inter, Poppins } from "next/font/google";
import { mergeSeo } from "~/lib/merge-seo";
import { Providers } from "./providers";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export const metadata = mergeSeo({});

interface RootLayoutProps {
  children: React.ReactNode;
}

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaCodeFont = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={classNames(
        "scroll-smooth",
        poppinsFont.variable,
        interFont.variable,
        firaCodeFont.variable,
      )}
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
