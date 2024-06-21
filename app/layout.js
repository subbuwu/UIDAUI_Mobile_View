import { Inter , Roboto_Condensed , Roboto} from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const roboto_condensed = Roboto_Condensed({ subsets : [ 'latin' ], weight : ['100','300','400','500','700','900'] })
export const roboto = Roboto({ subsets : [ 'latin' ], weight : ['100','300','400','500','700','900'] })

const metadata = {
  title: "UIDAUI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
