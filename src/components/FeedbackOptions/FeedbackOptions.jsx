// import { PropTypes } from "react";
import PropTypes from 'prop-types';

export const FeedbackOptions =({onClick, feedbackOptions}) => {
	return (
		<div>
			{Object.keys(feedbackOptions).map((key, ind) => {
				return(
					<button
					className="optionButton"
					key={ind}
					onClick={() => onClick(key)}
					color={key}
					size="large"
					variant="contained"
						>
							{key}
					</button>
				);
			})}
		</div>
	);
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
