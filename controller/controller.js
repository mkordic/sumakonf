const express = require("express");
const model = require("../module/module.js");


async function getStudentByNumber(req, res, next) {
        const number = req.params.number;
        const student = await model.getStudentByNumber(number);
            res.render('register.ejs', {
                student: student,
            });
}


async function updateStudent(req, res, next) {

    const number = req.params.number;

    const lecture_1 = req.body.lecture_1;
    const lecture_2 = req.body.lecture_2;
    const lecture_3 = req.body.lecture_3;
    const lecture_4 = req.body.lecture_4;
    const lecture_5 = req.body.lecture_5;
    const lecture_6 = req.body.lecture_6;
    const lecture_7 = req.body.lecture_7;
    const lecture_8 = req.body.lecture_8;
    const lecture_9 = req.body.lecture_9;
    const lecture_10 = req.body.lecture_10;
    const lecture_11 = req.body.lecture_11;
    const lecture_12 = req.body.lecture_12;
    const lecture_13 = req.body.lecture_13;
    const lecture_14 = req.body.lecture_14;
    const lecture_15 = req.body.lecture_15;
    const lecture_16 = req.body.lecture_16;
    const lecture_17 = req.body.lecture_17;


    const student = await model.getStudentByNumber(number);
    let count = 0;
    if(lecture_1 == "checked1"){
        count++;
        student.lecture_1 = true;
    } else {
        student.lecture_1 = false;
    }

    if(lecture_2 == "checked2"){
        count++;
        student.lecture_2 = true;
    } else {
        student.lecture_2 = false;
    }

    if(lecture_3 == "checked3"){
        count++;
        student.lecture_3 = true;
    } else {
        student.lecture_3 = false;
    }

    if(lecture_4 == "checked4"){
        count++;
        student.lecture_4 = true;
    } else {
        student.lecture_4 = false;
    }

    if(lecture_5 == "checked5"){
        student.lecture_5 = true;
        count++;
    } else {
        student.lecture_5 = false;
    }

    if(lecture_6 == "checked6"){
        count++;
        student.lecture_6 = true;
    } else {
        student.lecture_6 = false;
    }

    if(lecture_7 == "checked7"){
        count++;
        student.lecture_7 = true;
    } else {
        student.lecture_7 = false;
    }

    if(lecture_8 == "checked8"){
        count++;
        student.lecture_8 = true;
    } else {
        student.lecture_8 = false;
    }

    if(lecture_9 == "checked9"){
        count++;
        student.lecture_9 = true;
    } else {
        student.lecture_9 = false;
    }

    if(lecture_10 == "checked10"){
        count++;
        student.lecture_10 = true;
    } else {
        student.lecture_10 = false;
    }
  
    if(lecture_11 == "checked11"){
        count++;
        student.lecture_11 = true;
    } else {
        student.lecture_11 = false;
    }
  
    if(lecture_12 == "checked12"){
        count++;
        student.lecture_12 = true;
    } else {
        student.lecture_12 = false;
    }
  
    if(lecture_13 == "checked13"){
        count++;
        student.lecture_13 = true;
    } else {
        student.lecture_13 = false;
    }
  
    if(lecture_14 == "checked14"){
        count++;
        student.lecture_14 = true;
    } else {
        student.lecture_14 = false;
    }
  
    if(lecture_15 == "checked15"){
        count++;
        student.lecture_15 = true;
    } else {
        student.lecture_15 = false;
    }
  
    if(lecture_16 == "checked16"){
        count++;
        student.lecture_16 = true;
    } else {
        student.lecture_16 = false;
    }
  
    if(lecture_17 == "checked17"){
        count++;
        student.lecture_17 = true;
    } else {
        student.lecture_17 = false;
    }


    if(count >= 12){
        student.certificate = true;
    } else {
        student.certificate = false;
    }

    await model.updateStudent(student);
    
    res.redirect('/');
}


module.exports = {
    getStudentByNumber,
    updateStudent,
};