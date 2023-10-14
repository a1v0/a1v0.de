class Article {
	constructor (title, author = "a1v0", date, path) {
		this.title = title;
		this.author = author;
		this.date = date;
		this.path = path;

		allArticles.push(this);
	}

	static allArticles = [];
}
