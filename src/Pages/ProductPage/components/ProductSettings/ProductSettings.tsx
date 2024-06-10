import { ProductSettingsOptionI } from '@/Types/Product'
import { useState } from 'react'
import styles from './ProductSettings.module.css'

interface SettingsProps {
	options: ProductSettingsOptionI[]
	hasError?: boolean
	setImage: React.Dispatch<React.SetStateAction<string>>
	title: string
}

const Settings = ({ title, options, hasError, setImage }: SettingsProps) => {
	const [current, setCurrent] = useState<string | null>(null)
	return (
		<div className={styles.containerSettings}>
			<p className={styles.titleSettings}>
				{title}
				{hasError && (
					<span className={styles.error}> Please select a {`${title}`}</span>
				)}
			</p>
			<ul className={styles.options}>
				{options.map((s, index) =>
					s.changeImage && s.urlImage ? (
						<ChangeImageItem
							key={index}
							current={current}
							setCurrent={setCurrent}
							setImage={setImage}
							title={title}
							urlImage={s.urlImage}
							value={s.option}
						/>
					) : (
						<NormalItem
							key={index}
							current={current}
							setCurrent={setCurrent}
							title={title}
							value={s.option}
						/>
					),
				)}
			</ul>
		</div>
	)
}

export default Settings

interface NormalItemProps {
	setCurrent: React.Dispatch<React.SetStateAction<string | null>>
	current: string | null
	title: string
	value: string
}

const NormalItem = ({ setCurrent, current, title, value }: NormalItemProps) => {
	return (
		<li
			onClick={() => setCurrent(value)}
			className={`${styles.item} ${current === value ? styles.current : ''}`}
			key={value}
		>
			<label htmlFor={value}>
				<input type='radio' name={title} value={value} id={value} />
				{value}
			</label>
		</li>
	)
}

interface ChangeImageItemProps {
	setCurrent: React.Dispatch<React.SetStateAction<string | null>>
	current: string | null
	title: string
	setImage: React.Dispatch<React.SetStateAction<string>>
	value: string
	urlImage: string
}

const ChangeImageItem = ({
	setCurrent,
	current,
	title,
	setImage,
	value,
	urlImage,
}: ChangeImageItemProps) => {
	const changeState = () => {
		setCurrent(value)
		setImage(urlImage)
	}
	return (
		<li
			onClick={changeState}
			className={`${styles.item} ${current === value ? styles.current : ''}`}
			key={value}
		>
			<label>
				<input type='radio' name={title} value={value} />
				{value}
			</label>
		</li>
	)
}
