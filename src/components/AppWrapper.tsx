import authRepo from "@/app/api/repositories/auth.repo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    
  const router = useRouter();

  const { isLoading, data } = useQuery(["me"], () => authRepo.me());


  return <>{children}</>;
};

export default AppWrapper;
