class Article {
	constructor (title, date, slug /* file name without extension */, author = "a1v0") {
		this.title = title;
		this.date = date;
		this.slug = slug;
		this.author = author;

		allArticles.push(this);
	},

	static allArticles = [],

	getContent() {
		// promise or async method to retrieve contents of static article
	}
}

const dummyArticle = new Article("Fake news!", "today", "test-article");
