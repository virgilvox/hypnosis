var cli = require('cli');
var exec = require('exec');
var scripts = require('./scripts.json')

var options = cli.parse({
   name: [ 'n', 'The victims name', 'string' ],
   type: [ 't', 'Type of hypnosis', 'string' ]
});


var Applause = require('applause');
var replaceOptions = {
  patterns: [
    {
      match: 'victim_name',
      replacement: options.name
    }
  ]
};

var applause = Applause.create(replaceOptions);
console.log(options);
if(options.type == 'success'){

  var text = applause.replace(scripts.success);
  exec('say ' + text.content, function(err, out){
    console.log(text.content);
  });
}
