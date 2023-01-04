import authRepo from "@/app/api/repositories/auth.repo";
import { AppContext } from "@/context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useContext } from "react";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { setUser} = useContext(AppContext);

  const { isLoading, data } = useQuery(["me"], () => authRepo.me(), {
    onSuccess: (res) => {
        setUser(res.data.data)
    },
    onError: () => {
      router.push("/auth/login");
    },
  });

  return <>{children}</>;
};

export default AppWrapper;
