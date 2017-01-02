module.exports = {
	viewports: [
		{ name: 'phone', width: 320, height: 480 },
		{ name: 'laptop', width: 1280, height: 800 }
	],
	scenarios: [{
		label: 'Home',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['body'],
		readyEvent: null,
		delay: 2000,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}],
	paths: {
		bitmaps_reference: 'test/regression',
		bitmaps_test: 'node_modules/backstopjs/.tmp/bitmaps_test',
		casper_scripts: 'node_modules/backstopjs/.tmp/casper_scripts',
		html_report: 'node_modules/backstopjs/.tmp/html_report',
		ci_report: 'node_modules/backstopjs/.tmp/ci_report'
	},
	engine: 'phantomjs',
	report: ['browser', 'CLI', 'CI'],
	casperFlags: [],
	debug: false,
	port: 3002
}
