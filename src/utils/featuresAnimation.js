export const everyChangeAnimation = (styles, activeTab) => {
	switch (activeTab) {
		case 1:
			return styles.change1;
		case 2:
			return styles.change2;

		default:
			return styles.change3;
	}
};
