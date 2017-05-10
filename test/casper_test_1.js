// var Casper = require('casper').create();

casper.test.begin('Test Google', 1, function (test) {

    casper.start('http://www.google.com');

    casper.then(function () {

        this.fill('form[action="/search"]', {q: 'casperjs'}, true);

        test.assertTitle('Google', 'Goolge has correct title');
    });


    casper.run(function () {
        test.done();
    })

});

//CasperJS has its own handy test runner, just need use capser.test.begin(testTitle,numberOfTests,callback)

//How to run it just use capserjs test jsfile

