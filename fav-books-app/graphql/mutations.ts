import {gql} from "@apollo/client";

export const ADD_NOVEL = gql`
	mutation AddNovel($image: String, $title: String, $desc: String) {
		addNovel(image: $image, title: $title, desc: $desc) {
			authors {
				id
				name
				novelId
			}
			createdAt
			id
			image
			title
			updatedAt
			desc
		}
	}
`;

export const DELETE_NOVEL = gql`
	mutation deleteNovel($id: ID!) {
		deleteNovel(id: $id) {
			id
			title
			image
		}
	}
`;

export const UPDATE_NOVEL = gql`
	mutation UpdateNovel($id: ID!, $title: String, $image: String, $desc: String) {
		updateNovel(id: $id, title: $title, image: $image, desc: $desc) {
			id
			image
			title
			desc
		}
	}
`;

export const ADD_AUTHOR = gql`
	mutation Mutation($novelId: ID!, $name: String) {
		addAuthor(novelId: $novelId, name: $name) {
			id
			name
			novelId
		}
	}
`;

export const DELETE_AUTHOR = gql`
	mutation Mutation($id: ID!) {
		deleteAuthor(id: $id) {
			id
			name
			novelId
		}
	}
`;