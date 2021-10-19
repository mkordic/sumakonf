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

    const student = await model.getStudentByNumber(number);
    console.log(lecture_1);
    if(lecture_1 == "checked1"){
        console.log("Usao1");
        student.lecture_1 = true;
    } else {
       console.log('Promenio1');
         student.lecture_1 = false;
    }

    if(lecture_2 == "checked2"){
        console.log("Usao2")
        student.lecture_2 = true;
    } else {
        student.lecture_2 = false;
    }

    if(lecture_3 == "checked3"){
        student.lecture_3 = true;
    } else {
        student.lecture_3 = false;
    }

    if(lecture_4 == "checked4"){
        student.lecture_4 = true;
    } else {
        student.lecture_4 = false;
    }

    if(lecture_5 == "checked5"){
        student.lecture_5 = true;
    } else {
        student.lecture_5 = false;
    }

    if(lecture_6 == "checked6"){
        student.lecture_6 = true;
    } else {
        student.lecture_6 = false;
    }

    if(lecture_7 == "checked7"){
        student.lecture_7 = true;
    } else {
        student.lecture_7 = false;
    }

    if(lecture_8 == "checked8"){
        student.lecture_8 = true;
    } else {
        student.lecture_8 = false;
    }

    if(lecture_9 == "checked9"){
        student.lecture_9 = true;
    } else {
        student.lecture_9 = false;
    }

    await model.updateStudent(student);
    
    res.redirect('/');
}


module.exports = {
    getStudentByNumber,
    updateStudent,
};