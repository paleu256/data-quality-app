class DHIS2Page {
    open() {
        browser.url(process.env.DHIS2_BASE_URL || 'http://localhost:8080/');
    }

    submitLoginForm(username, password) {
        browser.setValue('#j_username', username);
        browser.setValue('#j_password', password);
        browser.click('#submit');
    }

    isLoggedIn() {
        return !browser.isVisible('#loginForm');
    }

    /*
    isFromLocation(location) {
      browser.waitForVisible(`#titleArea*=${location}`, 5000);
    }
    */
}

module.exports = new DHIS2Page();
