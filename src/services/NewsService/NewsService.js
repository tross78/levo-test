import * as axios from 'axios';

export class NewsService {
  constructor() {
    this.api_url = 'https://edfc013a-a0b4-4c82-90aa-a3fd6de30054.mock.pstmn.io/v2/everything';
  }

  async getData(apiKey, pageSize, page) {
    const res = await axios.get(this.api_url, {
      params: {
        q: 'bitcoin', pageSize, page,
      },
    });
    return res.data;
  }
}

export default new NewsService();
