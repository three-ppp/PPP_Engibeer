// ここに環境変数や、APIエンドポイントがある場合は定義します。

// process.env.NODE_ENVには、"test" | "development" | "production"のいずれかが自動的に入ります。
export const isProd = process.env.NODE_ENV === "production";

// 本番環境であれば本番用のAPIエンドポイントを、そうでなければ開発用のAPIエンドポイントを使います。
export const API_ENDPOINT = isProd
  ? "https://api.example.com"
  : "http://localhost:8000";
