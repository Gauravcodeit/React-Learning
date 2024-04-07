import { createContext } from "react";
const UserContext = createContext({
    loggedInUser : "default Value"
});
export default UserContext;