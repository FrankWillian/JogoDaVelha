import React from "react";
import Login from "./Login";
import WelcomeScreen from "./WelcomeScreen";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <WelcomeScreen username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
