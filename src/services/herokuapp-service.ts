const BASE_URL = "https://conduit-api-realworld.herokuapp.com/api/";
const ARTICLES = "articles";

class HerokuAppService {
  async getArticles(limit: number, modifier: number) {
    const skip = modifier * limit - limit;
    const searchUrl = `${BASE_URL}${ARTICLES}?limit=${limit}&offset=${skip}`;

    const getArticlesPack = async () => {
      const response = await fetch(searchUrl);

      try {
        const body = await response.json();

        return body.articles;
      } catch (err: any) {
        throw new Error(err);
      }
    };

    const articlesPack = await getArticlesPack();
    return articlesPack;
  }

  async getArticle(articleName: string, dodAbort: any) {
    const searchUrl = `${BASE_URL}${ARTICLES}/${articleName}`;

    try {
      const response = await fetch(searchUrl, {
        signal: dodAbort,
      });

      if (!response.ok) {
        // const error = new Error();
        // error.name = `Error ${response.status}`;
        // error.message = `Could not receive data from ${searchUrl} , received error ${response.status}`;
        // throw error;
        throw new Error(
          `Could not receive data from ${searchUrl} , received error ${response.status}`
        );
      }
      const body = await response.json();
      return body;
    } catch (err: any) {
      if (err.name === "AbortError") {
        throw new Error(`Aborted`);
      }
      throw err;
    }
  }
}

const herokuAppService = new HerokuAppService();

export const { getArticles } = herokuAppService;
export const { getArticle } = herokuAppService;

// export default herokuAppService;
