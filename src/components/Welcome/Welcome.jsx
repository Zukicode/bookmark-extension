import styles from './Welcome.module.scss';

import { Container } from 'components/Container/Container';

import tabletImage from 'assets/illustration-hero.svg';

export const Welcome = () => {
	return (
		<div className={styles.welcome}>
			<Container>
				<div className={styles.content}>
					<div className={styles.welcomeText}>
						<h1>A Simple Bookmark Manager</h1>

						<p>
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</p>

						<div className={styles.welcomeButtons}>
							<button>Get it on Chrome</button>
							<button>Get in on Firefox</button>
						</div>
					</div>

					<div className={styles.welcomeImage}>
						<img src={tabletImage} alt='tablet' />
					</div>
				</div>
			</Container>

			<div className={styles.backgroundImage} />
		</div>
	);
};
