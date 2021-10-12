import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentid: {
        type: String,
        required: true
    },
    schoolemail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('student', StudentSchema);

export default Student;