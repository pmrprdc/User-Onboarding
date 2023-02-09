import * as yup from "yup"

const formSchema = yup.object().shape({
    firstName : yup
    .string()
    .trim()
    .required("First Name Is Required!")
    .min(3, "Username must be 3 characters long!"),
    lastName: yup
    .string()
    .trim()
    .required("First Name Is Required!")
    .min(3, "Username must be 3 characters long!"),
    email : yup
    .string()
    .email("Must be a valid email adress")
    .required("You've gotta have an email!"),
    passWord: yup
    .string()
    .trim()
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )


})

export default formSchema;