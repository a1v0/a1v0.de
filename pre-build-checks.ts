// loop through all articles and directories
// check for folders that don't exist
// ensure category in file matches folder
//
//
//
//
//
//
//
//
//

import { categoriesMap } from "./app/article-categories";

const fs = require("fs");

const dirEntries: any[] = fs.readdirSync("articles/", {
	recursive: true,
	withFileTypes: true
});

const directories: any[] = [],
	articles: any[] = [];
const missingCategories: string[] = [];

dirEntries.forEach((dirEntry: any) => {
	if (dirEntry.isDirectory()) {
		directories.push(dirEntry);
		return;
	}

	articles.push(dirEntry);
});

validateDirectories();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const reset = "\x1b[0m";

const fgBlack = "\x1b[30m",
	fgRed = "\x1b[31m",
	fgGreen = "\x1b[32m",
	fgYellow = "\x1b[33m",
	fgBlue = "\x1b[34m",
	fgMagenta = "\x1b[35m",
	fgCyan = "\x1b[36m",
	fgWhite = "\x1b[37m",
	fgGray = "\x1b[90m";

const indentation = "   ";

console.log(
	`${indentation}${fgRed}================================================${reset}`
);
console.log(
	`${indentation}${fgRed}| ERROR: category missing from \`categoriesMap\` |${reset}`
);
console.log(
	`${indentation}${fgRed}================================================${reset}`
);
console.log();
console.log(
	`${indentation}The following categories are missing from the \`categoriesMap\` dictionary:`
);

console.log();
console.log();

function validateDirectories() {
	directories.forEach((directory) => {
		if (!categoriesMap[directory]) {
			missingCategories.push(directory);
		}
	});
}
