// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  password: yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    // required isn't required for checkboxes.
})

export default formSchema
