const SearchWeather = props => {
	return (
		<div className="searchWeather">
			<form>
				<label htmlFor="searchWeather">Szukaj:</label>
				<input
					type="text"
					id="searchWeather"
					onChange={e => props.filterWeather(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchWeather;
