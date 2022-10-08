import { Loginpage } from "./Components/Loginpage";
import { Routes,Route} from 'react-router-dom'
import { Passwordreset } from "./Components/Passwordreset";

import { Newpassword1 } from "./Components/Newpassword1";
import { Create } from "./Components/Create";
import { Dashboard } from "./Components/Dashboard";


export const url1="https://forgetpassword123.herokuapp.com"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Loginpage/>}/>
      <Route path='/login' element ={<Dashboard/>}/>
      <Route path='/forgotpassword' element ={<Passwordreset/>}/>
      <Route path='/newpassword/:id' element ={<Newpassword1/>}/>
      <Route path='/signin' element ={<Create/>}/>
    
      
    </Routes>
   </>
  );
}

export default App;
