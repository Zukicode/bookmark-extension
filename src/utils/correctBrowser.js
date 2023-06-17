export const correctBrowserPosition = (browser, styles) => {
	if (browser === 'chrome') return styles.chrome;
	else if (browser === 'firefox') return styles.firefox;
	else if (browser === 'opera') return styles.opera;
};

export const correctBrowserDescription = browser => {
	if (browser === 'chrome') {
		return {
			title: 'Add to Chrome',
			version: '62',
		};
	} else if (browser === 'firefox') {
		return {
			title: 'Add to Firefox',
			version: '55',
		};
	} else if (browser === 'opera') {
		return {
			title: 'Add to Opera',
			version: '46',
		};
	}
};
