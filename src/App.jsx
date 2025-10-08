import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginForm from "./components/LoginForm";
import EcomPage from "./components/EcomPage";

function App() {
  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });
  // const [change, setChange]= useState('login')
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Username: ", user.username);
  //   console.log("Username: ", user.password);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleSubmit();
  //   }, 5000);
  // }, [user]);
  // useEffect(() => {}, []);

  return (
    <div className="flex justify-center h-screen">
      <EcomPage />
    </div>
  );
}

export default App;
