const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Employee = require("../models/Employee");

// @route   GET api/employees
// @desc    Get all employees
// @access  Public
router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({ employees });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: "Server error" })
    }
})

// @route   GET api/employees
// @desc    Get an employee by nik
// @access  Public
router.get("/:nik", async (req, res) => {
    try {
        const employee = await Employee.findOne({ nik: req.params.nik });
        res.status(200).json({ employee });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: "Server error" })
    }
})

// @route   POST api/employees
// @desc    Create a new employee
// @access  Public
router.post("/", [
    check("nik","NIK harus diisi")
    .not()
    .isEmpty(),
    check("nama","Nama harus diisi")
    .not()
    .isEmpty(),
    check("telepon","Nomor Telepon harus diisi")
    .not()
    .isEmpty(),
    check("email","Mohon masukkan alamat email yang valid").isEmail(),
  ],
  async (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }

    const {nik, nama, alamat, telepon, email, unit, status, role} = req.body;

    try {
        // See if employee is already exist
        let employee = await Employee.findOne({ nik });

        if (employee) {
            return res.status(400).json({ errors: [{msg: "Employee already exist"}] })
        }

        employee = new Employee({
            nik,
            nama,
            alamat,
            telepon,
            email,
            unit,
            status,
            role
        })

        await employee.save();

        res.status(201).json({ employee });

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: "Server error" })
    }
  }
)

// @route   PUT api/employees/:nik
// @desc    Edit an employee by nik
// @access  Public
router.put("/:nik", [
    check("nik","NIK harus diisi")
    .not()
    .isEmpty(),
    check("nama","Nama harus diisi")
    .not()
    .isEmpty(),
    check("telepon","Nomor Telepon harus diisi")
    .not()
    .isEmpty(),
    check("email","Mohon masukkan alamat email yang valid").isEmail(),
  ],
  async (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }

    const {nama, alamat, telepon, email, unit, status, role} = req.body;

    try {
        // See if employee exist
        const employee = await Employee.findOne({ nik: req.params.nik });

        if (!employee) {
            return res.status(404).json({ errors: [{msg: "Employee not found"}] })
        }
        
        await Employee.updateOne({ nik: req.params.nik }, { nama, alamat, telepon, email, unit, status, role  })

        res.status(200).json({ msg: "Employee profile updated" });

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msg: "Server error" })
    }
  }
)

// @route   DEL api/employees/:nik
// @desc    Delete employee by nik
// @access  Public
router.delete("/:nik", async (req,res) => {
    try {
        await Employee.findOneAndRemove({ nik: req.params.nik })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({msg:"Server error"})
    }
})

module.exports = router;