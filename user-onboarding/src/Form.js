import React, {useState} from "react"
import * as yup from 'yup'
import formSchema from "./formSchema"

export default function Form(props){

    const initialFormValues = { 
        firstName: '',
        lastName : '',
        email : '',
        passWord: '',
        dataPermission : false
    }

    const [formData, setFormData] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({firstName : '', lastName: '', email: '', passWord: '', dataPermission: ''})

    const change = (evt) => {
    
        const {checked, value, type, name} = evt.target;
        console.log(checked, value, type, name)
        const valueToUse =  type === "checkbox" ? checked : value
        setFormData({...formData, [name]:valueToUse})
        passesYup(name, valueToUse)

    }


    const submitFormData = (evt) => {

        evt.preventDefault();
        console.log("successful submit")

    }

    //// HELPERS FUNCTION ////// 

    const passesYup = (name, value)=> {
        
        yup.reach(formSchema, name).validate(value)
        .then(()=> setErrors({...errors, [name]: ''}))
        .catch(err=> setErrors({...errors, [name]: err.errors[0]}))
        
    }
    
        
    return (
    
        <form onSubmit={submitFormData}>
            <label htmlFor="firstName">
                First Name
                <input 
                name="firstName" 
                type="text"
                value={formData.firstName}
                onChange={change}
                />
            </label>


            <label htmlFor="lastName">
                Last Name
                <input 
                    type="text"
                    name="lastName"
                    onChange={change}
                    value={formData.lastName}
                    />
                     </label>
            <label htmlFor="email">
                Email
                <input 
                name="email" 
                type="email"
                onChange={change}
                value={formData.email}
                />

            </label>
            <label htmlFor="passWord">
                Password
                <input 
                name="passWord"
                type="text"
                onChange={change}
                value={formData.passWord}
                />
            </label>
            <label htmlFor="dataPermission">
                Terms Of Service
                <input 
                name="dataPermission" 
                type="checkbox"
                checked = {formData.dataPermission}
                onChange={change}
                />
            </label>
            <button disabled ={disabled}>Submit</button>

        </form>














            )
}       