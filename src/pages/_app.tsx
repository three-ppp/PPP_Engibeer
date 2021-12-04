import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
