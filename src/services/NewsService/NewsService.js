import * as axios from 'axios';

export class NewsService {
  constructor() {
    this.api_url = 'https://newsapi.org/v2/everything';
  }

  async getData(apiKey, pageSize, page) {
    const res = await axios.get(this.api_url, {
      params: {
        q: 'bitcoin', pageSize, apiKey, page,
      },
    });
    return res.data;
  }
}

export default new NewsService();
