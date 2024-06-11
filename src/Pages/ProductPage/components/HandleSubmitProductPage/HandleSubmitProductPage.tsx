import { ProductSettingsI } from '@/Types/Product'
import React from 'react'

export type HandleSubmitProductPageProps = {
	event: React.FormEvent<Element>
	setErrors: React.Dispatch<
		React.SetStateAction<{
			[key: string]: boolean
		}>
	>
	settings: ProductSettingsI[]
}

const HandleSubmitProductPage = ({
	event,
	setErrors,
	settings,
}: HandleSubmitProductPageProps) => {
	event.preventDefault()
	const newErrors: { [key: string]: boolean } = {}
	let hasErrors = false

	// Check each setting if it's selected
	settings.forEach((setting) => {
		const radioButtons = document.getElementsByName(setting.title)
		let isSelected = false
		if (radioButtons) {
			for (let i = 0; i < radioButtons.length; i++) {
				if ((radioButtons[i] as HTMLInputElement).checked) {
					isSelected = true
					break
				}
			}
		}

		if (!isSelected) {
			newErrors[setting.title] = true
			hasErrors = true
		}
	})

	setErrors(newErrors)

	if (!hasErrors) {
		const settingsData: { name: string; value: string }[] = []
		settings.forEach((setting) => {
			const radioButtons = document.getElementsByName(setting.title)
			for (let i = 0; i < radioButtons.length; i++) {
				const radio = radioButtons[i] as HTMLInputElement
				if (radio.checked) {
					settingsData.push({
						name: radio.name,
						value: radio.value,
					})
					break
				}
			}
		})
		return settingsData
	} else {
		console.log('Please fill in all required fields')
		return null
	}
}
export default HandleSubmitProductPage
