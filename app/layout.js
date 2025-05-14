import { Metal_Mania} from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import AiCatBubble from "./_components/AiCatBubble";

 const metal = Metal_Mania({
  subsets: ["latin"],
  variable: "--font-metal",
  weight: "400",

 })

export const metadata = {
  title: "Cult of Cats",
  description: "You’ve entered the sacred sanctuary of the Cult of Cats — where whiskers rule, naps are sacred, and every meow is a blessing. Bow to the feline overlords, bask in their fluffy wisdom, and let the purring guide your soul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={metal.className}
      >
        <Provider>
          {children}
          <AiCatBubble />
        </Provider>
        
      </body>
    </html>
  );
}
