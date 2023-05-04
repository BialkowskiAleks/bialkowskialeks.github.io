import "./Weather.css";
import WeatherItem from "./WeatherItem";
import axios from "axios";

import { useState } from "react";
import SearchWeather from "./SearchWeather";

const Weather = () => {
	const [weatherData, setWeatherData] = useState([]);
	const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);

	const getWeatherData = () => {
		axios.get("https://danepubliczne.imgw.pl/api/data/synop").then(res => {
			setWeatherData(res.data);
			setWeatherDataAfterFilter(res.data);
		});
	};

	const filterWeather = searchValue => {
		const filteredWeatherData = weatherData.filter(weatherItem =>
			weatherItem.stacja.toLowerCase().includes(searchValue.toLowerCase())
		);

		setWeatherDataAfterFilter(filteredWeatherData);
	};

	useState(() => {
		getWeatherData();
	}, []);

	return (
		<div className="weather">
			<h1>Prognoza pogody</h1>
			<SearchWeather filterWeather={filterWeather} />
			<div className="weatherList">
				{weatherDataAfterFilter.map(weatherItem => {
					return (
						<WeatherItem
							weatherItem={weatherItem}
							key={weatherItem.id_stacji}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Weather;
