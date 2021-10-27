const BASE_URL = "https://conduit-api-realworld.herokuapp.com/api/";
const ARTICLES = "articles";

class HerokuAppService {
  async getArticles() {
    const searchUrl = `${BASE_URL}${ARTICLES}`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error(
        `Could not receive data from ${searchUrl} , received ${response.status}`
      );
    }

    const body = await response.json();

    return body;
  }
}

const herokuAppService = new HerokuAppService();
export default herokuAppService;
