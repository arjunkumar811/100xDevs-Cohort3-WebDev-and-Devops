
import { SignUp } from './pages/SignUp';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { DashBoard } from './pages/dashboard';




function App() {
return <BrowserRouter>
<Routes>
<Route path='/signup' element={<SignUp />} />
<Route path='/signin' element={<SignIn />} />
<Route path='dashboard' element={<DashBoard />} />
</Routes>
</BrowserRouter> 

}

export default App
