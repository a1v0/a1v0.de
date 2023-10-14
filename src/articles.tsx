class Article {
	constructor (title, author = "a1v0", date, path) {
		this.title = title;
		this.author = author;
		this.date = date;
		this.path = path;

		allArticles.push(this);
	},

	static allArticles = [],

	getContent() {
		// promise or async method to retrieve contents of static article
	}
}
