export interface StateType {
  isLoading: boolean;
  recievedArticles: Article[];
  currentPage: number;
  articlesPerPage: number;
  activeArticle: Article[] | null;
}

export interface ArticlePageStateType {
  isLoading: boolean;
  activeArticle: Article | null;
  errorOnServer: ErrorType | null;
  wrongUrl: boolean;
}

export type ErrorType = typeof Error;

export type Article = {
  UserEmail: string;
  author: {
    username: string;
    email: string | null;
    bio: string | null;
    image: string | null;
  };
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  tagList: string[];
  favoritesCount: number;
};

type OnChange = (pageNumber: number) => void;
type GetArticleDetailed = (articleName: string) => Article;

export type ArticlesType = Partial<StateType>;

export type FooterPropsType = Pick<
  StateType,
  "isLoading",
  // "recievedArticles",
  "currentPage",
  // "articlesPerPage",
  OnChange,
  "pageNumber"
>;

export type SingleArticlePropsType = Partial<
  StateType,
  "isLoading",
  // "recievedArticles",
  // "currentPage",
  // "articlesPerPage",
  GetArticleDetailed,
  "pageNumber"
>;
