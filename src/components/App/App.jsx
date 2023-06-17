import { useState } from 'react';

import styles from './App.module.scss';

import { Contact } from 'components/Contact/Contact';
import { Download } from 'components/Download/Download';
import { FAQ } from 'components/FAQ/FAQ';
import { Features } from 'components/Features/Features';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { MobileNav } from 'components/MobileNav/MobileNav';
import { Welcome } from 'components/Welcome/Welcome';

export const App = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<div className={styles.application}>
			<Header
				showMobileMenu={showMobileMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>
			<Welcome />
			<Features />
			<Download />
			<FAQ />
			<Contact />
			<Footer />

			<MobileNav
				showMobileMenu={showMobileMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>
		</div>
	);
};
