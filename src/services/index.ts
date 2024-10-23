import axios from "axios";

export type TypeTag = {
	name: string,
	slug: string
}

export type TypePost = {
	id: number,
	slug: string,
	title: string,
	teaser: string,
	content: string,
	date: string,
	tags?: TypeTag[],
	commented: boolean,
	source?: {
		title: string,
		url: string
	},
}

export type TypeComment = {
	id: number,
	post_id: number,
	parent_id?: number,
	avatar?: string,
	author: string,
	email: string,
	date: string,
	text: string
}

// const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

class PostService {
	private URL = 'http://localhost:3001/posts';

	async getAll() {
		const {data} = await axios.get<TypePost[]>(this.URL);
		return data;
	}
	
	async getOne(slug: string) {
		const {data} = await axios.get<TypePost[]>(`${this.URL}?slug=${slug}`);
		// await sleep(30000);
		return data[0];
	}
	
	async getSearch(query: string) {
		const {data} = await axios.get<TypePost[]>(`${this.URL}?q=${query}`);
		// await sleep(30000);
		return data[0];
	}
}

class TagsService {
	private URL = 'http://localhost:3001/tags';

	async getAll() {
		const {data} = await axios.get<TypeTag[]>(this.URL);
		return data;
	}
	
	async getOne(id: number) {
		const {data} = await axios.get<TypeTag[]>(`${this.URL}?id=${id}`);
		return data[0];
	}
}

class CommentService {
	private URL = 'http://localhost:3001/comments';

	async getAll() {
		const {data} = await axios.get<TypeComment[]>(this.URL);
		return data;
	}

	async getByPost(post_id: number) {
		const {data} = await axios.get<TypeComment[]>(`${this.URL}?post_id=${post_id}`);
		return data;
	}

	async getOne(id: number) {
		const {data} = await axios.get<TypeComment[]>(`${this.URL}?id=${id}`);
		return data[0];
	}

	async create(data: []) {
		return axios.post(this.URL, data);
	}
}

export const postService = new PostService();
export const tagsService = new TagsService();
export const commentService = new CommentService();