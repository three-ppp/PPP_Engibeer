import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "src/context/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider className="bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
