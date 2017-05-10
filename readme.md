 npm run genConfig(backstop genConfig) after this will add files to our project root: folders for BackstopJS screenshots,’backstop_data’and generating a boilerplate configuration file ‘backstop.json’
  
 we can add as many as scenarios based on our requirement, we can also generate specify screenshots based on label in scenarios
  
 backstop reference - -filter= <scenarios.label>
  
 we can also run specify scenarios by below command:
  
 backstop reference - - filter= <scenarios.label>
  
 Incremental reference updates
  
 By default backstop.reference will first remove all files in your reference directory then generate screenshots of all selectors specified in your config file.
  
 If you don’t want Backstopjs do first delete all files in your reference directory you can enable the incremental flag
 
 
 odule.exports = function(casper, scenario, vp) {
   casper.echo('Setting up test...', 'INFO');
 
   // LOG IN
   // ===================
   function doLogin() {
     casper.waitForSelector('input[name="Email"]', function() {
       this.sendKeys('input[name="Email"]', auth.user);
     });
 
     casper.then(function() {
       casper.mouseEvent('click', 'input#next');
     });
 
     casper.then(function() {
       casper.waitForSelector('input#Passwd', function() {
         this.sendKeys('input#Passwd', auth.pass);
         this.mouseEvent('click', 'input#signIn'); //This should take you to page B
       });
     });
   }
 
   doLogin();
 
   //this block is optional. see approach 3 below for info on why this is here...
   casper.then(function() {
     console.log("Saving cookies.")
     var cookies = JSON.stringify(casper.page.cookies, null, 2);
     fs.write(cookiePath, cookies, 'w');
   });