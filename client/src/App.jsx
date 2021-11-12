import { useState,useEffect } from "react";
import Pills_front from "./components/Add_pills/Pills_front";
import { Device } from "./components/Device_connect/main";
import Headerr from "./components/Header/Headerr";
import { Caddy } from "./components/Caddy_Log/Caddy/Caddy";
import { PeopleConnect } from "./components/Community/PeopleConnect";
import { Main } from "./components/Main";
import Signin from "./components/SignIn/Signin"
import Signup from "./components/SignUp/Signup"
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from "./App.module.css";
import homeIcon from "./components/Footer/homeimg.svg";
import communityIcon from "./components/Footer/groupimg.svg";
import caddyIcon from "./components/Footer/VectorTab1.svg";
import Iframe_addpill from "./components/Caddy_Log/Iframe_addpill/Iframe_addpill";

function App (){
  useEffect(()=>{
    setTimeout(()=>{
      setComp("signin")
    },4000)
  },[]);

  const [comp,setComp] = useState("main")
  function changeState(info){
    setComp(info);
  }

  
  if(comp==="main"){
    return(
      <Main/>
    )
  }
  if(comp==="signin"){
    return(
      <Signin changeState={changeState}/>
    )
  }
  if(comp==="signup"){
    return(
      <Signup />
    )
  }
  if(comp==="other"){
  return (
    <Router>
      <div>

        {/* Header */}
            
          
        <Headerr />

        <div className={style.appBody}>

          <Switch>

            {/* <Route path="/Main" exact>
              <Main />
            </Route> */}
           
            
            <Route path="" exact>
              <PeopleConnect />
            </Route>

            <Route path="/Pills_front">
<Pills_front/>
                </Route>

                <Route path="/Caddy" exact>
              <Caddy />
            </Route>

            <Route path="/add_pill" exact>
<Iframe_addpill/>
              </Route>

  

            <Route>404 not found</Route>

          </Switch>

        </div>

        {/* Footer */}
        <div className={style.footerbody}>
          <Link to="/Main"><div><img src={homeIcon} alt="home"></img></div></Link>
          <Link to="/PeopleConnect"><div><img src={communityIcon} alt="community"></img></div></Link>
          <Link to="/Pills_front"><div><img className={style.fix} src={caddyIcon} alt="caddy"></img></div></Link>
        </div>
      </div>
    </Router>
  )
  }
}

export default App;
