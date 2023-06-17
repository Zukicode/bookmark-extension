import { useState } from 'react';

import styles from './Dropdown.module.scss';

export const Dropdown = ({ title, description }) => {
	const [isVisibe, setVisible] = useState(false);

	const toggleVisible = () => setVisible(!isVisibe);

	return (
		<li onClick={toggleVisible} className={styles.dropdown}>
			<div className={styles.headerQuestion}>
				<h1 className={styles.title}>{title}</h1>
				<button className={isVisibe ? styles.active : ''}>
					<svg xmlns='http://www.w3.org/2000/svg' width='18' height='12'>
						<path
							fill='none'
							stroke='#5267DF'
							strokeWidth='3'
							d='M1 1l8 8 8-8'
						/>
					</svg>
				</button>
			</div>

			<div
				className={
					isVisibe
						? `${styles.description} ${styles.active}`
						: styles.description
				}
			>
				<p>{description}</p>
			</div>
		</li>
	);
};
