export * from "./ArchiveIframe";
// export { Button } from "./Button";
export * from "./Avatar";
export * from "./Button";
// ...

// このように再exportすると、呼び出し側で
// import { Button, Avatar } from "/components";
// のように、複数のモジュールを1行でまとめてimportすることができます。
// * を使うとそのファイルの全てになるので、ひつように応じて使い分けるとよいです！
