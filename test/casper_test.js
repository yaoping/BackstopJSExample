var Casper = require('casper').create();
//The .create() method will return an instance of the casper class

//To start Casper up, you must use the .start() method to navigate the site and run the casper suit
Casper.start('http://www.google.com', function () {

    //Now echo out the title of the current page, we can print out message in a range of different styles:INFO, ERROR,WARNING,COMMENT
    this.echo(this.getTitle(), 'INFO');

});

//casperjs test/casper_test.js

Casper.run();