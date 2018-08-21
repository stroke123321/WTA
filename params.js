const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
let params;
const setParams = (params_in) => {
    let params_in_json = params_in;
    console.log("Params in JSON");
    console.log(params_in_json);
    params = {
        'tone_input': params_in_json,
        'content_type': 'application/json'
    };
}

const getParams = () => {
    let parameters = JSON.stringify(params.tone_input);
    return parameters;
}

module.exports = {
    setParams,
    getParams
}