import { useEffect, useState } from "react";
import Display from "./Display";
import "./Counter.css";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Step from "./components/Step";

const Counter = props => {
	const [counter, setCounter] = useState(props.counterInitValue);
	const [showClock, setShowClock] = useState(true);
	const [stepValue, setStepValue] = useState(1);

	const updateStep = action => {
		setStepValue(action.target.value);
		// console.log(action.target.value);
	};

	const updateCounter = action => {
		if (action === "add") {
			setCounter(prevCounter => prevCounter + parseInt(stepValue));
		} else if (action === "reset") {
			setCounter(props.counterInitValue);
		} else {
			setCounter(0);
		}
	};

	useEffect(() => {
		console.log("wywołanie use Effect");
	}, [counter]);

	return (
		<div className="counter">
			<Display counter={counter} />
			<ButtonsPanel updateCounter={updateCounter} />
			{showClock ? (
				<Clock setShowClock={setShowClock} />
			) : (
				<p className="clockControl" onClick={() => setShowClock(true)}>
					pokaz zegar
				</p>
			)}
			<Step updateStep={updateStep} />
		</div>
	);
};
export default Counter;
