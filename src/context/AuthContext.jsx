import { createContext, useContext } from "react";

// Hardcoded user (simulating backend response)
const dummyUser = {
  userName: "Aviraj",
  roleType: "admin", // could be "user" for frontend
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login = async (credentials) => {
    const { email, password } = credentials;

    // Basic static check – in real use, validate properly
    if (email === "aviraj@example.com" && password === "password") {
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", JSON.stringify(dummyUser));
      return dummyUser;
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user: dummyUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
