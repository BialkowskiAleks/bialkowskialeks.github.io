import "./Post.css";

import { useState } from "react";

import axios from "axios";

const Post = props => {
	const [likesCount, setLikesCount] = useState(props.post.likes.length);
	const [deleteModalDisplay, setDeleteModalDisplay] = useState(false);
	const [doesUserLiked, setDoesUserLiked] = useState(
		props.post.likes.filter(like => like.username === props.user?.username)
			.length !== 0
	);

	const deletePost = id => {
		axios
			.post("https://akademia108.pl/api/social-app/post/delete", {
				post_id: id,
			})
			.then(res => {
				props.setPosts(posts => {
					return posts.filter(post => {
						return post.id !== res.data.post_id;
					});
				});
			})
			.catch(error => {
				console.error(error);
			});
	};

	const toggleDeleteModal = () => {
		setDeleteModalDisplay(!deleteModalDisplay);
	};

	const confirmDelete = () => {
		deletePost(props.post.id);
		toggleDeleteModal();
	};

	const likePost = (id, isLiked) => {
		axios
			.post(
				"https://akademia108.pl/api/social-app/post/" +
					(isLiked ? "dislike" : "like"),
				{
					post_id: id,
				}
			)
			.then(() => {
				setLikesCount(likesCount + (isLiked ? -1 : 1));
				setDoesUserLiked(!isLiked);
			});
	};

	const unfollow = id => {
		axios
			.post("https://akademia108.pl/api/social-app/follows/disfollow", {
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
		<div className="post">
			<div className="avatar">
				<img
					src={props.post.user.avatar_url}
					alt={props.post.user.avatar_url}
				/>
			</div>
			<div className="post-data">
				<div className="post-meta">
					<div className="author">{props.post.user.username}</div>
					<div className="date">{props.post.created_at.substring(0, 10)}</div>
				</div>
				<div className="post-content">{props.post.content}</div>

				<div className="likes">
					{props.post.user.username === props.user?.username && (
						<button
							className="btn"
							onClick={() => setDeleteModalDisplay(props.post.id)}
						>
							Delete post
						</button>
					)}

					{props.user && props.user.username !== props.post.user.username && (
						<button
							className="btn"
							onClick={() => unfollow(props.post.user.id)}
						>
							Unfollow
						</button>
					)}

					{props.user && (
						<button
							className="btn"
							onClick={() => likePost(props.post.id, doesUserLiked)}
						>
							{doesUserLiked ? "Dislike" : "like"}
						</button>
					)}

					{likesCount}
				</div>
			</div>

			{deleteModalDisplay && (
				<div className="deleteConfirmation">
					<h3>Are you sure you want to delete this post?</h3>
					<button
						className="btn yes"
						onClick={() => confirmDelete(props.post.id)}
					>
						Yes
					</button>
					<button
						className="btn no"
						onClick={() => setDeleteModalDisplay(false)}
					>
						No
					</button>
				</div>
			)}
		</div>
	);
};

export default Post;
