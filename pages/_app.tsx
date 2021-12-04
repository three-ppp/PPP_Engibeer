import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/Auth";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider className="bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
