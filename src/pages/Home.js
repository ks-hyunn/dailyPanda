import LogIn from "../components/user/LogIn";
import WelCome from "../components/WelCome";

const Home = (props) => {
  return (
    <>{props.isLogIn ? <WelCome /> : <LogIn setIsLogIn={props.setIsLogIn} />}</>
  );
};

export default Home;
