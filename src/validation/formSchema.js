// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is Required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    // required isn't required for checkboxes.
})

export default formSchema
