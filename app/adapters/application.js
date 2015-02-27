export default DS.RESTAdapter.extend({
	host: 'https://api.github.com/',
	
	headers: {
		"API_KEY": 'secretKey',
	}
})