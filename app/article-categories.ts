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
	linux: {
		displayName: "Linux"
	},
	"next.js": {
		displayName: "Next.js"
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
