const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const AllureReporter = require('jasmine-allure-reporter');

jasmine.loadConfigFile('./spec/support/jasmine.json');


jasmine.addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));
jasmine.configureDefaultReporter({
    showColors: true
});
jasmine.execute();
