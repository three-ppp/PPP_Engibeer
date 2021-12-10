// ここで静的なルートをオブジェクト or 配列として定義し、exportする。
// 下層ページについては別オブジェクトを定義
// ページ数が多くなる場合や、ネストが深くなる場合は他の方法も検討
export const STATIC_ROUTES = {
  HOME: "/home",
  // HOME: {
  //   href: "/",
  //   label: "ホーム",
  // }  このようにして、パスとラベルを定義する方法もありです。
  SIGNIN: "/",
  ADMIN: {
    INDEX: "/admin",
    HOME: "/admin/home",
  },
  // ... 以下も同じように定義
} as const; // as const とすると、すべてのプロパティをreadonlyにできる。
// 呼び出し側の例
// <Link href={STATIC_ROUTES.HOME}>
//   <a>ホーム</a>
// </Link>

// 動的なページのパスのベースルートを定義
export const DYNAMIC_ROUTES_BASE = {
  LIVE: "/live/",
  BEFORE: "/before/",
  ARCHIVE: "/archive/",
} as const;

// オブジェクトのvalueをunion typeで取得
export type DynamicRouteBase =
  typeof DYNAMIC_ROUTES_BASE[keyof typeof DYNAMIC_ROUTES_BASE];

// 動的ルートを取得
export const getDynamicRoute = (
  routeBase: DynamicRouteBase,
  dynamicRoute: string
) => `${routeBase}${dynamicRoute}`;

getDynamicRoute(DYNAMIC_ROUTES_BASE.LIVE, "1"); // "/live/1"

// 呼び出し側の例
// const sampleLiveId = "1";
// <Link href={getDynamicRoute(DYNAMIC_ROUTES_BASE.LIVE, sampleLiveId)}>
//   <a>ライブ{sampleLiveId}</a>
// </Link>

// TODO:
// ネストしたルートへの対応は考えてませんでした。。（今回で言う/before/{broadcast_id}/engibeer/add）
// ここはもう少し定義方法を考えるか、そもそもパスが複雑説もあるので、どちらも見直して良いかもしれません。
// とはいえそこまで無理にしなくてもよいので、とりあえずは上記設定を使い回す感じでも良いのかなと！
