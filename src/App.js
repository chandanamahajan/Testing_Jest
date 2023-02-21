import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading, isAuthenticated, error, user, logout, loginWithRedirect } =
    useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <div>hello {user.name}</div>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </>
    );
  } else {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }
};

export default App;
