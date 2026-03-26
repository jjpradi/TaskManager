import { BrowserRouter,Routes,Route } from "react-router-dom"
import Sidebar from "../widgets/Sidebar"
import Dashboard from "../pages/Dashboard"

import UserDetail  from "../pages/UserDetail"

const App=()=>{



    return (









<BrowserRouter>
<Routes>

   
<Route path="/directory"  element={<Dashboard/>

}/>



<Route path="/user/:id" element={<UserDetail/>}/>


</Routes>

    </BrowserRouter>




    )

}

export default App