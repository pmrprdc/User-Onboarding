import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import {useState} from "react"


function App() {


  const [users, setUsers] = useState([])
  const ghostUsers = [{firstName: 'asfsd', lastName: '2fsdfs', email: 'dafu@gna.com', passWord: '12@dkfj#jikjJK', dataPermission: true}]

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <Form updateUsers={setUsers} users={users}/>
      
      {users.map(user=>{
        return (
            <div key={user.firstName} style={{color: "red", border: "5px solid black", width: "50%", margin:"0 auto" }}>
            <h2>{user.firstName} {user.lastName}</h2>
            <h3>{user.email}</h3>
            </div>
        )
      })}


    </div>
  );
}

export default App;
