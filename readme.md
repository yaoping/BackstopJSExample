 npm run genConfig(backstop genConfig) after this will add files to our project root: folders for BackstopJS screenshots,’backstop_data’and generating a boilerplate configuration file ‘backstop.json’
  
 we can add as many as scenarios based on our requirement, we can also generate specify screenshots based on label in scenarios
  
 backstop reference - -filter= <scenarios.label>
  
 we can also run specify scenarios by below command:
  
 backstop reference - - filter= <scenarios.label>
  
 Incremental reference updates
  
 By default backstop.reference will first remove all files in your reference directory then generate screenshots of all selectors specified in your config file.
  
 If you don’t want Backstopjs do first delete all files in your reference directory you can enable the incremental flag