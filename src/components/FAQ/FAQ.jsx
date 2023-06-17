import { dropdownInfo } from 'utils/dropDownData';
import { Dropdown } from './Dropdown/Dropdown';
import styles from './FAQ.module.scss';

import { Container } from 'components/Container/Container';

export const FAQ = () => {
	return (
		<Container>
			<div id='pricing' className={styles.faq}>
				<div className={styles.header}>
					<h1>Frequently Asked Questions</h1>

					<p>
						Here are some of our FAQs. If you have any other questions you'd
						like answered please feel free to email us.
					</p>
				</div>

				<div className={styles.content}>
					<ul>
						{dropdownInfo.map(({ id, title, description }) => (
							<Dropdown key={id} title={title} description={description} />
						))}
					</ul>

					<button className={styles.moreInfo}>More Info</button>
				</div>
			</div>
		</Container>
	);
};
