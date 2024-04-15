const express = require('express');
const app = express();
const port = 3000;
const emailCheck = {
    "email": "required|string|email"
};

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const email = req.body.email; // access form data
    
    if (!email) {
        return res.status(400).json({error: 'Please Enter a Valid E-Mail Address'}); //Checks for the validity of what the user typed in
    }

    const validEmail = emailCheck.validate(email);

    if (validEmail) {
        return res.jsend({message: 'Thank you, ' + email + '!'}) //Confirms that what the user typed in is a valid email address
    };
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});