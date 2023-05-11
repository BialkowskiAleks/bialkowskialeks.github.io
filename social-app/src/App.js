import { useState } from "react";
import "./App.css";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";

import axios from "axios";

function App() {
	const storedUser = localStorage.getItem("user");
	const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

	axios.defaults.headers.common["Authorization"] =
		"Bearer " + (user ? user.jwt_token : "");

	return (
		<div className="App">
			<AppNav user={user} setUser={setUser} />
			<AppRoutes user={user} setUser={setUser} />
		</div>
	);
}

export default App;
