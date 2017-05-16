module.exports = function (casper, scenario, vp) {

    casper.then(function () {
        casper.mouseEvent('click', '#main-menu > li:nth-child(1) > a');
    });

    casper.then(function () {
        casper.mouseEvent('click', ' #util-menu > li:nth-child(3) > a');
    });
};


//casperjs test/casper_test.js
