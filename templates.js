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
    calculateDiff: function (field, records) {
        var local = records.local[field],
            baseline = records.baseline[field]

        function calc(a, b) {
            return Math.round(((parseFloat(a) / parseFloat(b)) * 100) - 100)
        } 
        if (local && baseline) {
             if (typeof local !== 'object') {
                return calc(local, baseline);
            }
            else {
                var values = {};
                Object.keys(local).forEach( function(year) {
                    if (baseline[year] && local[year]) {
                        values[year] = calc(local[year], baseline[year]);
                    }
                    else {
                        values[year] = null;
                    }
                });
                return values;
            }
 
        }

        return 0;
    }

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
          records: {
              local: data.local,
              baseline: data.baseline
          },
          schema: schema,
      }
  });
});

app.listen(3000);
