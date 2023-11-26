import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {};

type Role = "user" | "admin";

const AuthContext = createContext<AuthContextProps | null>(null);
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useMemberContext must be used within a MemberProvider");
  }
  return context;
}
const AuthProvider = ({ children }: PropsWithChildren) => {
  const [member, setMemberWithType] = useState();
  const [memberType, setMemberType] = useState<Role>();
  const navigate = useNavigate();
  function setMember() {
    setMemberWithType(member);
    if (member) {
      // if (member.MemberType.Name === "admin") {
      //     setMemberType("admin")
      // } else {
      //     setMemberType("user")
      // }
    } else {
      setMemberType(undefined);
      navigate("/login");
    }
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
