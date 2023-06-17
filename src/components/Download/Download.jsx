import { Container } from 'components/Container/Container';
import styles from './Download.module.scss';

import { BrowserAdd } from 'components/BrowserAdd/BrowserAdd';

export const Download = () => {
	return (
		<Container>
			<div className={styles.download}>
				<div className={styles.header}>
					<h1>Download the extension</h1>

					<p>
						We've got more browsers in the pipeline. Please do let us know if
						you've got a favourite you'd like us to prioritize.
					</p>
				</div>

				<div className={styles.content}>
					<BrowserAdd browser={'chrome'} />
					<BrowserAdd browser={'firefox'} />
					<BrowserAdd browser={'opera'} />
				</div>
			</div>
		</Container>
	);
};
