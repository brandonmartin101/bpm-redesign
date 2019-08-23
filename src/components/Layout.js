import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import favicon1 from '../img/favicon/apple-icon-180x180.png';
import favicon2 from '../img/favicon/android-icon-192x192.png';
import favicon4 from '../img/favicon/favicon-96x96.png';
import favicon5 from '../img/favicon/ms-icon-150x150.png';

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<div>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link rel="apple-touch-icon" sizes="180x180" href={favicon1} />
				<link rel="icon" type="image/png" sizes="192x192" href={favicon2} />
				<link rel="icon" type="image/png" sizes="96x96" href={favicon4} />
				<meta name="msapplication-TileColor" content="#0b4168" />
				<meta name="msapplication-TileImage" content={favicon5} />
				<meta name="theme-color" content="#0b4168" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content="/img/og-image.jpg" />

				<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Oswald:500&display=swap" rel="stylesheet">
			</Helmet>
			<header>
				<Navbar />
			</header>
			<main>
				<div>{children}</div>
			</main>
			<Footer />
		</div>
	);
};

export default TemplateWrapper;
