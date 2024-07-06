interface mappedCategory {
	name: string;
}

export const categoriesMap: { [key: string]: mappedCategory } = {
	"c-sharp": {
		name: "C#"
	},
	general: {
		name: "General"
	},
	"next.js": {
		name: "Next.js"
	},
	regex: {
		name: "Regular expressions (regex)"
	},
	servicenow: {
		name: "ServiceNow"
	},
	"ups-api": {
		name: "UPS API"
	}
};
