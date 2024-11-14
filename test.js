db.movies.find(
    {
        director: "Christopher Nolan",
        year: { $gt: 2005 }
    },
    {
        title: 1,
        year: 1,
        "cast.name": 1
    }
)

db.laptops.find(
    {$and: [{ price: { $gte: 800 } }, {price: { $lte: 1200 } }]},
    { ram: { $gte: 16 }},
    { storage: { $gte: 512 }},
    { screen_size: { $gte: 15 }},
    { $or: [{ brand: "Apple" }, { brand: "Dell" }] }
)


db.laptops.find({ $and: [{ price: { $gte: 800 } }, {price: { $lte: 1200 } }] });
db.laptops.find({ ram: { $gte: 16 }});
db.laptops.find({ storage: { $gte: 512 }});
db.laptops.find({ screen_size: { $gte: 15 }});
db.laptops.find({ $or: [{ brand: "Apple" }, { brand: "Dell" }] });

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: Strinng,
        required: true
    }, lastName: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }
});





Outline your thought process and the steps you’d take to set up register and login routes in an Express app using Mongoose (no coding). Address the following points:




Route Methods: Which HTTP methods will you use for each route, and why ?
    I will use POST for both routes.POST is used to submit data to be processed to a specified resource.The data is included in the body of the request.POST is used to create new resources on the server.
Receiving Data: What data will you be receiving from the client(e.g., form fields), and what data is essential for each route ?
    For the register route, I will receive the user's first name, last name, email, and password. For the login route, I will receive the user's email and password.
Handling Data: Describe how you will handle the received data.Specifically:
For registering, how will you create and save a new user in the database ? Include considerations for password hashing and validation.
    For registering, I will create a new user object with the received data, hash the password, and save the user to the database. I will use a library like bcrypt to hash the password before saving it to the database. I will also validate the user's data to ensure that it meets the required criteria (e.g., valid email format, strong password).
For login, what steps will you take to verify the user's credentials (e.g., checking email and password), and how will you respond based on whether they are valid?
 For log in, I will check if the user's email exists in the database. If the email exists, I will compare the hashed password stored in the database with the password provided by the user. If the passwords match, I will generate a JWT token and send it back to the client. If the passwords do not match, I will respond with an error message.
Brief Summary: Summarize what each route(register and login) should accomplish at a high level.
    The register route should create a new user in the database with the provided information, hash the password, and respond with a success message. The login route should verify the user's credentials, generate a JWT token if the credentials are valid, and respond with the token. If the credentials are invalid, it should respond with an error message.

    Based on the previous part, try implementing a sudo code for each route: register, log in
    // Register Route
app.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        
        // Validate the data
        // Check if the email is valid
        // Check if the password is strong
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user object
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        
        // Save the user to the database
        await newUser.save();
        
        // Respond with a success message
        res.json({ message: "User registered successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
}