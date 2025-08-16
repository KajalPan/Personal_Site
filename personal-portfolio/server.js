// Import required modules
const express = require("express"); // Web framework for building APIs
const router = express.Router();    // Router object to define API routes
const cors = require("cors");       // Middleware to allow frontend requests from a different domain
const nodemailer = require("nodemailer"); // Library for sending emails

// Create an Express app
const app = express();

// Enable CORS so your frontend can make API requests to this backend
app.use(cors());

// Parse incoming JSON requests so req.body works
app.use(express.json());

// Use the router for handling API routes
app.use("/", router);

// Start the backend server on port 5000
app.listen(5000, () => console.log("Server Running"));

// Debugging: log your email credentials (stored in environment variables)
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Create a transporter for sending emails using Gmail
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "kajalpanicker@gmail.com", // Your email address
    pass: ""                    // Your email password or app-specific password
  },
});

// Check if the email transporter is ready to send messages
contactEmail.verify((error) => {
  if (error) {
    console.log(error); // Log errors if transporter setup fails
  } else {
    console.log("Ready to Send"); // Confirmation that email sending is set up
  }
});

// Define POST route for contact form submissions
router.post("/contact", (req, res) => {
  // Extract form fields from the request body
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Prepare the email content
  const mail = {
    from: name,
    to: "kajalpanicker@gmail.com", // Where the form submissions will be sent
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      // If sending fails, return the error as JSON
      res.json(error);
    } else {
      // If sending succeeds, send a success code and message
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
