var request = require('request');

var headers = {
    'Authorization': 'Bearer ba6898cab2fe56a7e50214a08480f69e9b42a8aec92f276026cf119f4b2ca50d',
    'Content-Type': 'application/json'
};

var dataString = '{"pipelineId":"5e9eecbf4d7393880030ae7b","message":"Run","branch":"master","tag":"","commitHash":"1489c451ce38690c07a3a6b7b66436eedb0f73af"}';

var options = {
    url: 'https://app.wercker.com/api/v3/runs',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

