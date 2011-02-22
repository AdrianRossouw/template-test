require.paths.unshift(__dirname + '/modules', __dirname + '/lib/node', __dirname);
var data = require('data');
var schema = require('schema');

var app = require('express').createServer();

var filters = require('jade').filters;

filters.USD = function(value) { return '$' + require('./util').ac(value); }
filters.numeric= function(value) { return require('./util').ac(value); }
filters.percent= function(value) { 
    console.log(value);
    return require('./util').percent(value,1) + '%'; }
filters.rank= function(value) {
       switch (value[value.length - 1]) {
           case '1': return value + 'st';
           case '2': return value + 'nd';
           case '3': return value + 'rd';
           default: return value +'th';
       }
   }
filters.string= function(value) { return value; }


app.set('view engine', 'jade');

app.get('*', function(req, res) {
  res.render('page', {
      locals: {
          idKey: 'postcode',
          records: [data],
          schema: schema
      }
  });
});

app.listen(3000);
