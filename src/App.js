import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom" ; 
import LandingPage from './container/Landingpage/LandingPage';
import SignIn from './container/SignIn/SignIn' ;
import HomePage from "./container/HomePage/Homepage" ; 

import {useAuth0} from '@auth0/auth0-react' ; 


function App() {


  const{user , isAuthenticated , isLoading } = useAuth0() ; 

  const isUserLoggedIn = true ; 

  return (
    // here i have wrapped all the components of my app inside BrowseRouter , now all  of our components will l be able to access the properties of react-router-dom  library .
    <BrowserRouter> 
        <div className="app">
           {/* now herer i will  call the routes components , so that  inside it i can call the single single route component . */}
           <Routes>
            <Route path="/"  element = {isAuthenticated ?<HomePage /> : <LandingPage /> } > </Route>
           
            <Route path="/sign-in"  element = {<SignIn /> } > </Route>
           </Routes>

        </div>
    </BrowserRouter>
  );
}

export default App;
