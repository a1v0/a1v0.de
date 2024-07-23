interface MappedCategory {
	displayName: string;
}

export const categoriesMap: { [key: string]: MappedCategory } = {
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
	vue: {
		displayName: "Vue"
	},
	"ups-api": {
		displayName: "UPS API"
	}
};
