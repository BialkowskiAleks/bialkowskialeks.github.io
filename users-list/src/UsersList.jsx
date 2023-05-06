import { useEffect } from "react";
import { useState } from "react";
import "./UsersList.css";

const UsersList = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		usertype: "Admin",
	});

	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState([]);

	const filteredUser = event => {
		// console.log("działam");
		const btnClassName = event.target.className;
		console.log(btnClassName);

		let filteredUsers = users.filter(user => {
			if (btnClassName === "btn-admins") {
				return user.usertype === "Admin";
			} else if (btnClassName === "btn-users") {
				return user.usertype === "User";
			} else if (btnClassName === "btn-all") {
				return users;
			}
		});
		// console.log(filteredUsers);
		setFilter(filteredUsers);
	};

	const handleInputChange = e => {
		console.log(e.target.value);
		const target = e.target;
		const name = target.name;
		setFormData(prevDataForm => {
			return { ...prevDataForm, [name]: target.value };
		});
	};

	const setUser = e => {
		e.preventDefault();
		setUsers(users.concat({ ...formData, id: Date.now() }));
	};

	const removeUser = id => {
		const filteredUsers = users.filter(user => user.id !== id);
		setUsers(filteredUsers);
	};

	useEffect(() => {
		setFilter(users);
	}, [users]);

	return (
		<div className="usersList">
			<form onSubmit={setUser}>
				<label htmlFor="username">User name</label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="User name"
					onChange={event => handleInputChange(event)}
					value={formData.username}
				/>
				<label htmlFor="email">User email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="User email"
					onChange={event => handleInputChange(event)}
					value={formData.email}
				/>
				<label htmlFor="usertype">User type</label>
				<select
					name="usertype"
					id="usertype"
					onChange={event => handleInputChange(event)}
				>
					<option value="Admin" defaultChecked>
						Admin
					</option>
					<option value="User">User</option>
				</select>
				<button>Save</button>
			</form>

			<button className="btn-admins" onClick={event => filteredUser(event)}>
				Wyśwetl tylko adminów
			</button>
			<button className="btn-users" onClick={event => filteredUser(event)}>
				Wyświet tylko userów
			</button>
			<button className="btn-all" onClick={event => filteredUser(event)}>
				Wyswietl wszystkich
			</button>

			<div className="list">
				{filter.map(user => {
					return (
						<div
							className="userItem"
							key={user.id}
							onClick={() => removeUser(user.id)}
						>
							<p>{user.username}</p>
							<p>{user.email}</p>
							<p>{user.usertype}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UsersList;
