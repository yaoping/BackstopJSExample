module.exports = function (casper, scenario, vp) {
    //This script runs before your app loads. Edit here to log-in, load cookies or set other states required for your test.
    casper.then(function () {


        casper.sendKeys('first-name', 'Pingping');
        casper.sendKeys('last-name', 'Yao');

        this.mouseEvent('click', '#contact-details-submit');

    });
};