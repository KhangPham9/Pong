const express = require('express');
const app = express();
app.set('port', 4020);

const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname));

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/css'));
app.use(express.static(__dirname + '/app/js'));



app.listen(app.get('port'), function() {
  console.log('Express server started on http://localhost:' + app.get('port'));
  console.log(__dirname);
});
