import type { NextPage } from 'next'
import Head from "next/head";
import { Header } from "../src/components/Header";
  
const Top: NextPage = () => {
	return (
		<div>
			<Head>
				<title>エンジビアの泉</title>
			</Head>
			<div>
				<header>
					<Header />
				</header>
			</div>
		</div>
	);
};

export default Top
