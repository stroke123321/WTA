const express = require('express');
// Usando la libreria Watson
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const app = express();
const bodyParser = require('body-parser')


//MIDELWARE 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const config = require('./config');
const params = require('./params');

app.use(express.static(__dirname + '/puublic'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola mundo')
    res.send("Hola mundo")
    res.render('home', {


    });
});

//*******************************************************GET WTA_API***************************************************************
app.get('/WTA_API', (req, res) => {
    // res.send('Hola mundo')  
    let body = req.body;
    console.log(body);
    // const params = {
    //     'tone_input': body,
    //     'content_type': 'application/json'
    // };

    // const tone_analyzer = new ToneAnalyzerV3({
    //     username: config.username,
    //     password: config.password,
    //     version_date: '2017-09-21'
    // });

    // tone_analyzer.tone(params, function(error, response) {
    //     if (error) {
    //         console.log("Error");
    //         console.log("Error: ", error);
    //     } else {
    //         // console.log(tone2);
    //         let tone = JSON.stringify(response, null, 2);
    //         res.json(response);
    //     }
    // });
});

//********************************************************GET /WTA*****************************************************************
app.get('/WTA', (req, res) => {
    res.render('WTA', {
        nombre: 'Kinich',
    })

});

//**********************************************************POST******************************** */
app.post('/WTA', (req, res) => {
    // let body = req.body;
    // console.log(body);
    let body = (req.body);
    console.log(body);

    const params = {
        'tone_input': body,
        'content_type': 'application/json'
    };

    const tone_analyzer = new ToneAnalyzerV3({
        username: config.username,
        password: config.password,
        version_date: '2017-09-21'
    });

    tone_analyzer.tone(params, function(error, response) {
        if (error) {
            console.log("Error");
            console.log("Error: ", error);
        } else {
            // console.log(tone2);
            let tone = JSON.stringify(response, null, 2);
            res.json(response);
            console.log(tone);
        }
    });


});

app.listen(3000, () => {
    console.log(`Escuchando desde el puerto 3000`);
});