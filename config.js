var config = {
	expressPort: 3000,
	client: {
		mongodb: {
			defaultDatabase: "mongopop",
			defaultCollection: "simples",
			defaultUri: "mongodb://localhost:27017"
		},
		mockarooUrl: "http://www.mockaboo.com/536ecbc0/download?count=1000&key=48da1ee0"
	}
};

module.exports = config;
