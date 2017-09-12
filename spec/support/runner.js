const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const AllureReporter = require('jasmine-allure-reporter');

jasmine.loadConfigFile('./spec/support/jasmine.json');


jasmine.addReporter(new AllureReporter({
  resultsDir: 'allure-results-second'
}));
jasmine.configureDefaultReporter({
    showColors: true
});
jasmine.execute();
