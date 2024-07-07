interface mappedCategory {
	displayName: string;
}

export const categoriesMap: { [key: string]: mappedCategory } = {
	"c-sharp": {
		displayName: "C#"
	},
	general: {
		displayName: "General"
	},
	"next.js": {
		displayName: "Next.js"
	},
	regex: {
		displayName: "Regular expressions (regex)"
	},
	servicenow: {
		displayName: "ServiceNow"
	},
	"ups-api": {
		displayName: "UPS API"
	}
};
