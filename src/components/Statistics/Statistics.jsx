
export const Statistics = ({title, good, neutral, bad, total, positivePercentage}) => {

	return(
		<>
		<div>
			<h2>{title}</h2>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
		</div>
		<div>
			<p>Total: {total}</p>
			<p>Positive: {positivePercentage}%</p>
		</div>
		</>
	)
}