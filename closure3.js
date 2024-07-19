const createAuthSession = () => {
    let user = null;
    let token = null;
  
    const login = (username, authToken) => {
      user = username;
      token = authToken;
    };
  
    const logout = () => {
      user = null;
      token = null;
    };
  
    const getUser = () => user;
    const getToken = () => token;
  
    return {
      login,
      logout,
      getUser,
      getToken,
    };
  };
  
  // Using the User Authentication Module
  const authSession = createAuthSession();
  
  authSession.login('john_doe', 'abc123token');
  console.log(authSession.getUser());  
  console.log(authSession.getToken());  
  
  authSession.logout();
  console.log(authSession.getUser());  
  console.log(authSession.getToken()); 
  