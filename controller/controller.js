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

    const student = await model.getStudentByNumber(number);

    if(lecture_1 == "checked1"){
        console.log("Usao1");
        student.lecture_1 = true;
    }

    if(lecture_2 == "checked2"){
        console.log("Usao2")
        student.lecture_2 = true;
    }

    if(lecture_3 == "checked3"){
        student.lecture_3 = true;
    }

    if(lecture_4 == "checked4"){
        student.lecture_4 = true;
    }

    if(lecture_5 == "checked5"){
        student.lecture_5 = true;
    }

    if(lecture_6 == "checked6"){
        student.lecture_6 = true;
    }

    await model.updateStudent(student);
    
    res.redirect('/');
}


module.exports = {
    getStudentByNumber,
    updateStudent,
};