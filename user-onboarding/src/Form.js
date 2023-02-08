


export default function Form(props){


    return (

        <form>
            <label for="firstName">
                First Name
                <input 
                name="firstName" 
                type="text"/>
            </label>


            <label for="lastName">
                Last Name
                <input 
                    type="text"
                    name="lastName"/>
                     </label>
            <label for="email">
                Email
                <input 
                name="email" 
                type="email"/>
            </label>
            <label for="passWord">
                Password
                <input 
                name="passWord"
                type="text"
                />
            </label>
            <label for="checkBox">
                Terms Of Service
                <input name="checkBox" type="checkbox"/>
            </label>


        </form>














            )
}       