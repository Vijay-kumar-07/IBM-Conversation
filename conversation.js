var prompt = require('prompt-sync')();
var watson = require('ibm-watson');
//workspace for Insurance Assistant
var workspace = '33667d88-479c-430c-a24c-94544714f226';

var conversation = watson.conversation({
  username: 'Auto-generated service credentials',
  password: 'qZGm3teYNn3Fb0Dr3ttmjJjMTHR5C0ZDX0TW8bq22gvZ',
  version: 'v1',
  version_date: '2022-03-07'
});

conversation.message({
  workspace_id: workspace,
  input: {'text': ''}
}, processUserInput);

function processUserInput(err, response) {
  if (err) {
    console.log(err);
    return;
  }
  if (response.intents.length > 0 ) {
    console.log('Intent: ');
    console.log(response.intents[0]);
  }
  if (response.output.text.length > 0) {
    console.log(response.output.text[0]);
  }

  var newMessage = prompt('enter response: ');
  if (newMessage === 'stop') {
    return;
  }

  conversation.message({
    workspace_id: workspace,
    input: {text: newMessage},
    context: response.context,
  }, processUserInput);

}