const Step = props => {
	return (
		<div className="step">
			<form>
				<input
					type="number"
					onChange={event => {
						props.updateStep(event);
					}}
				/>
				<label htmlFor="step">Step:</label>
			</form>
		</div>
	);
};

export default Step;
