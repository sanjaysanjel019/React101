
// import Header from "./components/Header";
// import MainComponent from "./components/MainComponent";
// import Footer from "./components/Footer";
// import Greetings from "./components/Greetings";
// import ProductInfo from "./components/ProductInfo";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
import PropTypes from 'prop-types';

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
 return isValid ? <ValidPassword /> : <InvalidPassword />
}

const App = () => {

  return (
    <section>
      <h1>Conditional Rendering</h1>

      {/* Weather Component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />
      {/* UserStatus Component */}
      {/* <UserStatus loggedIn={true} /> */}
      <UserStatus loggedIn={false} />
      {/* Greeting Component */}
      <Greeting timeOfDay={"morning"} />
      <Greeting timeOfDay={"afternoon"} />
    
  </section> 
   )
}

const User = ({name,age}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
Password.propTypes = {
  isValid: PropTypes.string.isRequired,
 
};


export default App;