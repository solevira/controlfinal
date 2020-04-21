var request = require('request');

var headers = {
    'Authorization': 'Bearer ba6898cab2fe56a7e50214a08480f69e9b42a8aec92f276026cf119f4b2ca50d',
    'Content-Type': 'application/json'
};

var dataString = '{"pipelineId":"5e9eecbf4d7393880030ae7b","message":"Run","branch":"master","tag":"","commitHash":"c7fbf78ee02b795194ca488cf5efbf1d9cfafe13"}';

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



