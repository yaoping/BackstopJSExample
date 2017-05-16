module.exports = function (casper, scenario, vp) {

    casper.then(function () {
        casper.mouseEvent('click', ' #util-menu > li:nth-child(3) > a');
    });
};