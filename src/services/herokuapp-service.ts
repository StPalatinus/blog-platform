const BASE_URL = "https://conduit-api-realworld.herokuapp.com/api/";
const ARTICLES = "articles";

class HerokuAppService {
  async getArticles(limit: number, modifier: number) {
    const skip = modifier * limit - limit;
    const searchUrl = `${BASE_URL}${ARTICLES}?limit=${limit}&offset=${skip}`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error(
        `Could not receive data from ${searchUrl} , received ${response.status}`
      );
    }

    const body = await response.json();

    return body.articles;
  }
}

const herokuAppService = new HerokuAppService();
export default herokuAppService;
