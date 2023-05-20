import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

import "./FollowRecommendations.css";

const FollowRecommendations = props => {
	const [recommendations, setRecommendations] = useState([]);

	const getRecommendations = () => {
		axios
			.post("https://akademia108.pl/api/social-app/follows/recommendations")
			.then(res => {
				setRecommendations(res.data);
			});
	};

	useEffect(() => {
		getRecommendations();
	}, [props.posts]);

	const follow = id => {
		axios
			.post("https://akademia108.pl/api/social-app/follows/follow", {
				leader_id: id,
			})
			.then(() => {
				props.getLatestPosts();
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div className="followRecommendations">
			{recommendations.map(recommendation => {
				return (
					<div className="followRecommendation" key={recommendation.id}>
						<img
							src={recommendation.avatar_url}
							alt={recommendation.username}
						/>
						<h3>{recommendation.username}</h3>
						<button className="btn" onClick={() => follow(recommendation.id)}>
							Follow
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default FollowRecommendations;
