import { useEffect, useState } from "react";

const Clock = props => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		// console.log("komponent");

		const interval = setInterval(() => {
			// console.log("wykonuje interwał");
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			// console.log("odmontowuje");
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		// console.log("komponent się aktualizuje");
	});

	return (
		<p>
			{time}{" "}
			<span className="clockControl" onClick={() => props.setShowClock(false)}>
				x
			</span>
		</p>
	);
};

export default Clock;
