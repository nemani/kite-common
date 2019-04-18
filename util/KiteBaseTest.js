const {AllureTestReport, Reporter} = require('../report');

const kiteAllureFolder = '../../../../kite-allure-reports';

class KiteBaseTest {
  constructor(name, payload, reportPath) {
    // Allure test report
    this.name = name;
    this.report = new AllureTestReport(this.name);
    
    this.reporter = new Reporter(reportPath);
    
    // fillOutReport();
    if(payload != undefined) {
      this.payload = payload;
      this.payloadHandling(this.payload);
    }
  }

  async testScript() {
    throw new Error('You must implement this function');
  }

  payloadHandling(payload) {
    if (payload != undefined) {
      // Todo: Add some info
      this.url = payload.url;
      this.timeout = payload.testTimeout * 1000;
      this.statsCollectionDuration = payload.statsCollectionDuration * 1000;
      this.statsCollectionInterval = payload.statsCollectionInterval * 1000;
    }
  }

  setDescription(description) {
    this.report.setDescription(description);
  }
}

module.exports = KiteBaseTest;