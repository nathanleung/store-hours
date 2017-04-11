// karma.conf.js
module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		files: [
			'js/angular.min.js',
			'js/angular-mocks.js',
			"app.js",
			"app.config.js",
			"store-data.js",
			"store-card.js",
			"store-list.js",
			"app.spec.js",
			'*.js',
			'*.spec.js'
		],
		browsers: ['Chrome'],
		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine'
		],
		autoWatch: true
	})
}