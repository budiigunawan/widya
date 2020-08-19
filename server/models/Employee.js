const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    nik: {
        type: String,
        required: true,
        unique: true,
    },
    nama: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
    },
    telepon: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    unit: {
        type: String,
    },
    status: {
        type: String,
    },
    role: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;