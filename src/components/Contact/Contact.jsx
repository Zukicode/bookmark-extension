import { useCallback, useState } from 'react';

import debounce from 'lodash.debounce';

import styles from './Contact.module.scss';

import iconError from 'assets/icon-error.svg';
import { validateEmail } from 'utils/validateEmail';

export const Contact = () => {
	const [email, setEmail] = useState('');
	const [isError, setError] = useState(false);

	const updateSearch = useCallback(
		debounce(str => {
			if (validateEmail(str)) {
				setError(false);
			} else {
				setError(true);
			}
		}, 500),
		[]
	);

	const handleChange = e => {
		setError(false);
		setEmail(e.target.value);
		updateSearch(e.target.value);
	};

	return (
		<div id='contact' className={styles.contact}>
			<div className={styles.content}>
				<p className={styles.alreadyText}>35,000+ ALREADY JOINED</p>
				<h1>Stay up-to-date with what we're doing</h1>
				<div className={styles.contactForm}>
					<div
						className={
							isError ? `${styles.entry} ${styles.error}` : styles.entry
						}
					>
						<input
							type='email'
							placeholder='Enter your email addres'
							value={email}
							onChange={handleChange}
						/>
						{isError ? (
							<p className={styles.errorText}>
								Whoops, make sure it's an email
							</p>
						) : (
							''
						)}

						{isError ? (
							<span className={styles.errorIcon}>
								<img src={iconError} alt='icon-error' />
							</span>
						) : (
							''
						)}
					</div>
					<button>Contact Us</button>
				</div>
			</div>
		</div>
	);
};
