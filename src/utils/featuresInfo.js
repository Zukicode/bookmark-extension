import firstTabImage from 'assets/illustration-features-tab-1.svg';
import secondTabImage from 'assets/illustration-features-tab-2.svg';
import thirdTabImage from 'assets/illustration-features-tab-3.svg';

export const getFeauturesInfo = activeTab => {
	if (activeTab === 1) {
		return {
			title: 'Bookmark in one click',
			description:
				'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
			image: firstTabImage,
		};
	} else if (activeTab === 2) {
		return {
			title: 'Intelligent search',
			description:
				'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
			image: secondTabImage,
		};
	} else if (activeTab === 3) {
		return {
			title: 'Share your bookmarks',
			description:
				'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
			image: thirdTabImage,
		};
	}
};
