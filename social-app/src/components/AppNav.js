import "./AppNav.css";

import axios from "axios";

import { Link } from "react-router-dom";

const AppNav = props => {
	const handleLogout = () => {
		axios
			.post("http://akademia108.pl/api/social-app/user/logout")
			.then(res => {
				console.log(res);
				props.setUser("");
				localStorage.removeItem("user");
			})
			.catch(error => console.error(error));
	};

	return (
		<nav className="mainNav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				{!props.user && (
					<li>
						<Link to="/login">Login</Link>
					</li>
				)}
				{props.user && (
					<li>
						<Link to="/" onClick={handleLogout}>
							Logout
						</Link>
					</li>
				)}
				{!props.user && (
					<li>
						<Link to="/signup">SignUp</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default AppNav;
