const WeatherItem = props => {
	return (
		<div className="weatherItem">
			<h2>{props.weatherItem.stacja}</h2>
			<p>Temperatura: {props.weatherItem.temperatura} st. C.</p>
			<p>
				Ciśnienie:{" "}
				{props.weatherItem.cisnienie
					? props.weatherItem.cisnienie + " hPa"
					: "brak danych"}{" "}
			</p>
		</div>
	);
};

export default WeatherItem;
