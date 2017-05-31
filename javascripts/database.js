"use strict";

let api = require('./apikey'),
    dbURL = api.config.databaseURL,
    dbKey = api.config.apiKey;

function viewFamMembers() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${dbURL}.json`,
            type: 'GET'
        }).done(function(data) {
            resolve(data);
        });
    });
} 

function addFamMember(obj) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${dbURL}.json`,
            type: 'POST',
            data: JSON.stringify(obj)
        }).done(function(data) {
            console.log("memeber processed");
        });
    });
}

function deleteFamMember(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${dbURL}/${id}.json`,
            type: 'DELETE'
        }).done(function(data) {
            console.log("member deleted");
            resolve();
        });
    });
}

module.exports = {viewFamMembers, addFamMember, deleteFamMember};
