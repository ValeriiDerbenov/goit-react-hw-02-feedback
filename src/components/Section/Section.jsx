import { ButtonPart } from "./Section.styled"

export const Section = ({title, children}) => {
	return (
		<ButtonPart>
			<h1>{title}</h1>
			{children}
		</ButtonPart>
	)
}