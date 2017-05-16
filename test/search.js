module.exports = function (casper, scenario, vp) {

    function searchInformation() {
        casper.waitForSelector('input#search-bar-input', function () {
            this.sendKeys('input#search-bar-input', 'QA');
        });
    }

    searchInformation();
    casper.then(function () {
        // this.sendKeys('input#search-bar-input', 'QA');
        this.mouseEvent('click', '.search-bar__button'); //This should take you to page B

        // casper.mouseEvent('click', '#main-menu > li:nth-child(1) > a');
        // console.log(this.getCurrentUrl());

    });

};