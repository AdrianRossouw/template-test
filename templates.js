require.paths.unshift(__dirname + '/modules', __dirname + '/lib/node', __dirname);
var data = require('data');
var schema = require('schema');

var app = require('express').createServer();

app.helpers({
    format: function(value, format) {
        format = format || 'string';
        return (formatters[format] ? formatters[format](value) : formatters.string(value));
    },
    // added so that we can pass the value down to partials.
    field: null,
});

// various display formatters.
var formatters = {
   USD:  function(value) { return '$' + require('./util').ac(value); },
   numeric: function(value) { return require('./util').ac(value); },
   percent: function(value) { return require('./util').percent(value,1) + '%'; },
   rank: function(value) {
       switch (value[value.length - 1]) {
           case '1': return value + 'st';
           case '2': return value + 'nd';
           case '3': return value + 'rd';
           default: return value +'th';
       }
   },
   string: function(value) { return value; },
}

app.set('view engine', 'jade');

app.get('*', function(req, res) {
  res.render('page', {
      locals: {
          idKey: 'postcode',
          records: [data, data],
          schema: schema,
      }
  });
});

app.listen(3000);
