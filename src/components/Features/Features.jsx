import { useEffect, useState } from 'react';

import styles from './Features.module.scss';

import { Container } from 'components/Container/Container';

import { everyChangeAnimation } from 'utils/featuresAnimation';
import { getFeauturesInfo } from 'utils/featuresInfo';

export const Features = () => {
	const [data, setData] = useState({
		title: '',
		description: '',
		image: '',
	});
	const [activeTab, setActiveTab] = useState(1);

	useEffect(() => {
		setData(getFeauturesInfo(activeTab));
	}, [activeTab]);

	return (
		<div id='features' className={styles.features}>
			<Container>
				<div className={styles.header}>
					<h1>Features</h1>
					<p>
						Our aim is to make it quick and easy for you to access your
						favourite websites. Your bookmarks sync between your devices so you
						can access them on the go.
					</p>
				</div>

				<div className={styles.nav}>
					<ul>
						<li
							onClick={() => setActiveTab(1)}
							className={activeTab === 1 ? styles.active : ''}
						>
							Simple Bookmarking
						</li>
						<li
							onClick={() => setActiveTab(2)}
							className={activeTab === 2 ? styles.active : ''}
						>
							Speedy Searching
						</li>
						<li
							onClick={() => setActiveTab(3)}
							className={activeTab === 3 ? styles.active : ''}
						>
							Easy sharing
						</li>
					</ul>
				</div>

				<div
					className={`${styles.content} ${everyChangeAnimation(
						styles,
						activeTab
					)}`}
				>
					<div className={styles.image}>
						<img src={data.image} alt='tab' />
					</div>

					<div className={styles.text}>
						<h1>{data.title}</h1>
						<p>{data.description}</p>
						<button>More Info</button>
					</div>
				</div>
			</Container>

			<div className={styles.backgroundImage} />
		</div>
	);
};
