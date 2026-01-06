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
	servicenow: {
		displayName: "ServiceNow"
	},
	"ups-api": {
		displayName: "UPS API"
	}
};
