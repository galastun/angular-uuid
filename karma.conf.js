module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'./node_modules/angular/angular.js',
			'./node_modules/angular-mocks/angular-mocks.js',
            './dist/angular-uuid.min.js',
            './test/app.js',
			'./test/*.spec.js'
		],
		exclude: [],
		preprocessors: [],
		reporters: ['spec'],
		colors: true,
		browsers: ['Chrome'],
		singleRun: true
	});
}