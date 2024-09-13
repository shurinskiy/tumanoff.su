import axios from "axios";

export type DataArticle = {
	slug: string,
	title: string,
	teaser: string,
	content: string,
	date: string,
	tags?: string[],
	source?: string
}

class PostService {
	private URL = 'http://localhost:3001/posts';

	async getAll() {
		const {data} = await axios.get<DataArticle[]>(this.URL);
		return data;
	}

	async getOne(slug: string) {
		const {data} = await axios.get<DataArticle[]>(`${this.URL}?slug=${slug}`);
		return data[0];
	}

	async create(data: []) {
		return axios.post(this.URL, data);
	}
}

export const postService = new PostService();