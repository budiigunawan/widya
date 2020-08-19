const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

// Connect to Database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.send("API is running");
})

// Define Routes
app.use("/api/employees", require("./routes/employee"));

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))