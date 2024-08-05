import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/login/Login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUp from './components/Auth/sign_up/SignUp';
import Routing from './routing/Routing';

function App() {
  return (
    <>
    {/* <Login/> */}
    <Routing/>
    
    </>
  );
}

export default App;
