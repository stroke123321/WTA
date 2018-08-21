var submitData = function() {
    var data = "text=" + $("#examplar").val();

    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.response);
            let respuestaPost_json = (this.response);
            console.log(respuestaPost_json);
            //********************FOR PARA DOCUMENT_TONE******** */

            let tones = respuestaPost_json.sentences_tone;
            let tones2 = JSON.stringify(tones);
            console.log(tones2);
            for (let i = 0; i <= tones2.length - 1; i++) {

                let tbody2 = document.querySelector('.tbody2'); //<tbody>
                let nuevoTBodyTr2 = document.createElement("tr");
                let nuevoTBodyTh2 = document.createElement("th");

                var dato2 = document.createTextNode("Tone");
                nuevoTBodyTh2.appendChild(dato2);
                nuevoTBodyTr2.appendChild(nuevoTBodyTh2);

                for (let j = 1; j <= 3; j++) {
                    let nuevoTrTd2 = document.createElement("td");
                    if (j == 1) {
                        var info2 = document.createTextNode(`${tones[i].score}`);
                    }
                    if (j == 2) {
                        info2 = document.createTextNode(`${tones[i].tone_id}`);
                    }
                    if (j == 3) {
                        info2 = document.createTextNode(`${tones[i].tone_name}`)
                    }

                    nuevoTrTd2.appendChild(info2);
                    nuevoTBodyTr2.appendChild(nuevoTrTd2);
                }

                tbody2.appendChild(nuevoTBodyTr2);

            }


        }
    });
    // data2 = JSON.stringify(data);
    xhr.open("POST", "http://localhost:3000/WTA");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
}

// var submitData = function() {
//     var data = "text=" + $("#examplar").val();

//     console.log(data);
//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.addEventListener("readystatechange", function() {
//         if (this.readyState === 4) {

//         }
//     });
//     // data2 = JSON.stringify(data);
//     xhr.open("GET", "http://localhost:3000/WTA_API");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.setRequestHeader("Cache-Control", "no-cache");
//     xhr.send(data);
// }