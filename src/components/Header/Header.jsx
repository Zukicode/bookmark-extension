import { Container } from 'components/Container/Container';

import styles from './Header.module.scss';

import logo from 'assets/logo-bookmark.svg';
import { scrollToContent } from 'utils/scrollToContent';

export const Header = ({ showMobileMenu, setShowMobileMenu }) => {
	return (
		!showMobileMenu && (
			<Container>
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src={logo} alt='logo-bookmark' />
					</div>

					<div className={styles.navigation}>
						<ul>
							<li onClick={() => scrollToContent('#features')}>FEATURES</li>
							<li onClick={() => scrollToContent('#pricing')}>PRICING</li>
							<li onClick={() => scrollToContent('#contact')}>CONTACT</li>
							<button>LOGIN</button>
						</ul>
					</div>

					<div
						onClick={() => setShowMobileMenu(true)}
						className={styles.mobileNavigation}
					>
						<button />
					</div>
				</div>
			</Container>
		)
	);
};
