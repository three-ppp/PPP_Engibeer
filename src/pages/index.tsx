import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { Button } from "components/Button";
import { signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseError } from "@firebase/util";

const Home: NextPage = () => {
  const provider = new GithubAuthProvider();

  const [error, setError] = useState(false);

  const signIn = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // ユーザーの情報
      const user = result.user;

      // ユーザー情報をFireStoreに保存
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName, // nullになってしまうが一旦保留
        iconURL: user.photoURL,
        isAdmin: false,
        createdAt: serverTimestamp(),
      });

      // コンテキストにユーザー情報を保存する
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(true);
      }
    }
  }, []);

  const signOutWithGitHub = useCallback(() => {
    signOut(auth);
    console.log("logout");
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Index page</h1>
      <Button onClick={signIn} text="サインイン" />
      <Button onClick={signOutWithGitHub} text="サインアウト" />
      {error ? (
        <div className="text-red-700">ログインできませんでした</div>
      ) : null}
    </>
  );
};

export default Home;
