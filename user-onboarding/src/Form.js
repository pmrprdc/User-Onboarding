import React, {useState} from "react"


export default function Form(props){

    const initialFormValues = { 
        'firstName': '',
        'lastName' : '',
        'email' : '',
        'passWord': '',
        'dataPermission' : false
    }

    const [formData, setFormData] = useState(initialFormValues)
    

    const onChange = (evt) => {
        evt.preventDefault();
    }

    return (

        <form>
            <label htmlFor="firstName">
                First Name
                <input 
                name="firstName" 
                type="text"
                value={formData.firstName}
                onChange={onChange}
                />
            </label>


            <label htmlFor="lastName">
                Last Name
                <input 
                    type="text"
                    name="lastName"/>
                     </label>
            <label htmlFor="email">
                Email
                <input 
                name="email" 
                type="email"/>
            </label>
            <label htmlFor="passWord">
                Password
                <input 
                name="passWord"
                type="text"
                />
            </label>
            <label htmlFor="dataPermission">
                Terms Of Service
                <input name="checkBox" type="checkbox"/>
            </label>


        </form>














            )
}       