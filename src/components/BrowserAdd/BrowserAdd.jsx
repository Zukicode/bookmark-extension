import { useEffect, useState } from 'react';

import styles from './BrowserAdd.module.scss';

import chromeIcon from 'assets/logo-chrome.svg';
import firefoxIcon from 'assets/logo-firefox.svg';
import operaIcon from 'assets/logo-opera.svg';
import {
	correctBrowserDescription,
	correctBrowserPosition,
} from 'utils/correctBrowser';

export const BrowserAdd = ({ browser }) => {
	const [activeIcon, setActiveIcon] = useState(chromeIcon);
	const [activeDescription, setActiveDescription] = useState({
		title: '',
		version: '',
	});

	useEffect(() => {
		switch (browser) {
			case 'chrome':
				setActiveIcon(chromeIcon);
				break;
			case 'firefox':
				setActiveIcon(firefoxIcon);
				break;

			default:
				setActiveIcon(operaIcon);
				break;
		}

		setActiveDescription(correctBrowserDescription(browser));
	}, [browser]);

	return (
		<div
			className={`${styles.browser} ${correctBrowserPosition(browser, styles)}`}
		>
			<div className={styles.icon}>
				<img src={activeIcon} alt={browser} />
			</div>
			<div className={styles.text}>
				<h1>{activeDescription.title}</h1>
				<p>Minimum version {activeDescription.version}</p>
			</div>

			<div className={styles.divider}></div>

			<button>Add & Install Extension</button>
		</div>
	);
};
