import { useContext } from "react";

import { AuthContext } from "../contexts/AuthProvider";

export default function useUser() {
  const { user } = useContext(AuthContext);

  return { user };
}
