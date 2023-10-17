import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

interface ArticleIndex {
    [key: string]: Article;
}

class Article {
    title: string;
    date: string;
    slug: string;
    author: string;

    constructor(
        title: string,
        date: string,
        slug: string /* file name without extension */,
        author = "a1v0"
    ) {
        this.title = title;
        this.date = date;
        this.slug = slug;
        this.author = author;

        Article.allArticles[this.slug] = this;
    }

    static allArticles: ArticleIndex = {};

    async getContent() {
        const content = await axios.get("./articles/" + this.slug + ".txt");
        return content.data;
    }
}

const dummyArticle1 = new Article("Fake news!", "today", "test-article");
const dummyArticle2 = new Article("Real news!", "today", "test-article1");

export default Article;
