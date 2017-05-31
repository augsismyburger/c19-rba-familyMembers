"use strict";

function writeFam(data) {
    let htmlHolder = `<div>`;
    for (let i in data) {
        console.log('fam data', data[i]);
        htmlHolder += `<h5>${data[i].name}</h5>`;
        htmlHolder += `<p>Age: ${data[i].age}</p>`;
        htmlHolder += `<p>${data[i].sex}</p>`;
        htmlHolder += `<p>${data[i].skills} </p>`;
        htmlHolder += `<button id="${i}" class="famDelete">Disown Fam</button>`;
    }
    htmlHolder += `</div`;
    $('#famDiv').html(htmlHolder);
}

module.exports = {writeFam};
