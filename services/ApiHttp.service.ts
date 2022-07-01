type ApiGetDtoType = { path: string, queryParams?: { [param: string]: string | number } };
type ApiPostDtoType = { path: string, body?: object };

export class ApiHttpService {
	private static baseUrl: string = 'http://localhost:4000/api/e-commerce/';
	private static token: string = null;

	public static async get({ path, queryParams }: ApiGetDtoType) {
		let urlToFetch = this.getPath(path);
		const headers = this.getHeaders();
		if (queryParams) {
			const queryParmsEntries = Object.entries(queryParams);
			let count = 0;
			for (const [key, value] of queryParmsEntries) {
				if (count === 0) {
					urlToFetch = `${urlToFetch}?${key}=${value}`;
					continue;
				}
				urlToFetch += `&${key}=${value}`;
				count++;
			}
		}
		const response = await fetch(urlToFetch, {
			headers,
			keepalive: true,
			method: 'GET',
		});
		const { data, error, messages } = await response.json();
		return data;
	}

	public set token(token: string) {
		this.token = token;
	}

	public static async post({ path, body }: ApiPostDtoType) {
		const urlToFetch = this.getPath(path);
		const headers = this.getHeaders();
		const options = {
			headers,
			method: 'POST',
			keepalive: true,
		};
		if (body) options['body'] = JSON.stringify(body);
		const response = await fetch(urlToFetch, options);
		const { data, error, messages } = await response.json();
		return data;
	}

	private static getPath(path: string) {
		return `${this.baseUrl}${path}`;
	};

	private static getHeaders() {
		const baseHeaders: any = {
			'Content-Type': 'application/json'
		};
		if (this.token) {
			baseHeaders['Authorization'] = `Bearer ${this.token}`;
		}
		return baseHeaders;
	}
}