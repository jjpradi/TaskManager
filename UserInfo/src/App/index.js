import { BrowserRouter,Routes,Route } from "react-router-dom"
import Sidebar from "../widgets/Sidebar"
import Dashboard from "../pages/Dashboard"

import UserDetail  from "../pages/UserDetail"

const App=()=>{



    return (











<Routes>

   
<Route path="/directory"  element={<Dashboard/>

}/>



<Route path="/user/:id" element={<UserDetail/>}/>


</Routes>

    



    )

}

export default App