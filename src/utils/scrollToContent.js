export const scrollToContent = id => {
	document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};
