const mongoose = require('mongoose');

const schema = new mongoose.Schema ( {
    _id: mongoose.Schema.Types.ObjectId,
    number: Number,
    fullName: String,
    lecture_1: {type: Boolean, default: false},
    lecture_2: {type: Boolean, default: false},
    lecture_3: {type: Boolean, default: false},
    lecture_4: {type: Boolean, default: false},
    lecture_5: {type: Boolean, default: false},
    lecture_6: {type: Boolean, default: false},
    lecture_7: {type: Boolean, default: false},
    lecture_8: {type: Boolean, default: false},
    lecture_9: {type: Boolean, default: false},
    lecture_10: {type: Boolean, default: false},
    lecture_11: {type: Boolean, default: false},
    lecture_12: {type: Boolean, default: false},
    lecture_13: {type: Boolean, default: false},
    lecture_14: {type: Boolean, default: false},
    lecture_15: {type: Boolean, default: false},
    lecture_16: {type: Boolean, default: false},
    lecture_17: {type: Boolean, default: false},
    certificate: {type: Boolean, default: false},
});

const model = mongoose.model('Model', schema, 'prisutni');

async function getStudentByNumber(number){
    const student = await model.find({number: number}).exec();
    
    if(student.length === 0){
        console.log('Kako se ovo desilo?')
        return null;
    }
    return student[0];
}

async function updateStudent(student){
    const updatedStudent = await model.updateOne({number: student.number}, {
        $set: {
            lecture_1: student.lecture_1,
            lecture_2: student.lecture_2,
            lecture_3: student.lecture_3,
            lecture_4: student.lecture_4,
            lecture_5: student.lecture_5,
            lecture_6: student.lecture_6,
            lecture_7: student.lecture_7,
            lecture_8: student.lecture_8,
            lecture_9: student.lecture_9,
            lecture_10: student.lecture_10,
            lecture_11: student.lecture_11,
            lecture_12: student.lecture_12,
            lecture_13: student.lecture_13,
            lecture_14: student.lecture_14,
            lecture_15: student.lecture_15,
            lecture_16: student.lecture_16,
            lecture_17: student.lecture_17,
            certificate: student.certificate,
        }
    }).exec();

    console.log(updatedStudent);
}

module.exports = {
    getStudentByNumber,
    updateStudent,
};