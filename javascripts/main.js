"use strict";

let db = require('./database'),
    DOM = require('./domWriter');

$(document).on('click', '#addFam', function(){
    let pHolder = {};
   pHolder.name = $('#famName').val();
   pHolder.age = $('#famAge').val();
   pHolder.sex = $('#famSex').val();
   let temp = $('#famSkills').val();
   let skillsArray = temp.split(', ');
   pHolder.skills = skillsArray;
   db.addFamMember(pHolder);
   $('#showFamDiv').removeClass('hidden');
   $('#addFamDiv').addClass('hidden');
    db.viewFamMembers().then(
        DOM.writeFam
    );
});

$(document).on('click', '#writeFam', function() {
    db.viewFamMembers().then(
        DOM.writeFam
    );
});

$(document).on('click', '#showAddFam', function() {
    $('#showFamDiv').addClass('hidden');
    $('#addFamDiv').removeClass('hidden');
});

$(document).on('click', '.famDelete', function(event) {
    db.deleteFamMember(this.id).then(
    db.viewFamMembers
    ).then(
        DOM.writeFam
    );
});