const mongoose = require('mongoose');

const schema = new mongoose.Schema ( {
    _id: mongoose.Schema.Types.ObjectId,
    number: Number,
    fullName: String,
    lecture_1: Boolean,
    lecture_2: Boolean,
    lecture_3: Boolean,
    lecture_4: Boolean, 
    lecture_5: Boolean, 
    lecture_6: Boolean,
    lecture_7: Boolean,
    lecture_8: Boolean,
    lecture_9: Boolean,
});

const model = mongoose.model('Model', schema, 'prisutni');

async function getStudentByNumber(number){
    const student = await model.find({number: number}).exec();
    /// OVDE JE GRESKA, ali zasto ulazi u ovaj if??? Proveri bazu da li je dobra, a ako ne onda mozda nevalja shema ili nesto tako
    if(student.length === 0){
        console.log('Kako se ovo desilo?')
        return null;
    }
    return student[0];
}

// izgleda da ne radi ova funkcija, ne znam zasto
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
        }
    }).exec();

    console.log(updatedStudent);
}

// funkcija koja ce da promeni bool vrednost za odredjeno lecture

module.exports = {
    getStudentByNumber,
    updateStudent,
};