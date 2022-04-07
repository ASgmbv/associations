import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Heading, Container } from "@chakra-ui/react";
import Header from "../components/Header";

import Slider from "../components/Slider";
import Raitings from "../components/Raitings";
import News from "../components/News";
import Documents from "../components/Documents";
import Companies from "../components/Companies";
//

import Descriptions from "../components/Descriptions";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

const Home: NextPage = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Header />
			</Container>
			<Slider />
			<Companies />
			<Heading
				size="lg"
				display="flex"
				justifyContent="center"
				alignItems="center"
				marginTop="100px"
				marginBottom="40px"
			>
				ОБ АССОЦИАЦИИ
			</Heading>
			<Descriptions />
			<Raitings />

			<Stats />
			<News />
			<Documents />

			<Contacts />
			<Footer />
		</>
	);
};

export default Home;
