const Yup = require("yup");

const userValidationSchema = Yup.object({
  name: Yup.string()
    .required("This field is required.")
    .min(2, "Name should be a minimum of 2 characters.")
    .max(50, "Please enter a name of 50 characters or less"),
  email: Yup.string()
    .email("Invalid email format.")
    .required("This field is required."),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Passwords should be a minimum of 8 characters.")
    .max(100, "Please enter a password of 100 characters or less."),
});

module.exports = userValidationSchema;
