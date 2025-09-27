import { ReactNode } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import { TUser, TUserToken } from "../utils/ApplicationTypesAndGlobals";

type TUserContextProps = {
  authenticatedUser: TUserToken | null;
  setAuthenticatedUser: (user: TUserToken | null) => void;
  // allUsers: TUser[] | undefined;
  // isLoadingUsers: boolean;
  // createUser: (newUser: Omit<TUser, "id">) => void;
  // deleteUser: (id: string) => void;
  // authenticate: (email: string, password: string) => void;
  // addUserMutation: UseMutationResult<TUser, Error, Omit<TUser, "id">, unknown>;
};

type TUpdateMutationParams = {
  id: string;
  user: Omit<Partial<TUser>, "id">;
};

const UserContext = createContext<TUserContextProps>({} as TUserContextProps);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<TUserToken | null>(
    null
  );
  // const queryClient = useQueryClient();
  // const [allUsers, setAllUsers] = useState<TUser[]>([]);

  // const authenticate = (email: string) => {
  //   const user = allUsers.find((user) => {
  //     return user.email.toLowerCase() === email.toLowerCase();
  //   });
  //   if (!user) {
  //     throw new Error("No user found!");
  //   } else {
  //     setAuthenticatedUser(user);
  //   }
  // };

  // const { data: allUsersData, isLoading: isLoadingUsers } = useQuery({
  //   queryKey: ["fetchAllUsers"],
  //   queryFn: () => apiUser.getAll(),
  // });

  // const addUserMutation = useMutation({
  //   mutationFn: (user: Omit<TUser, "id">) => apiUser.post(user),
  //   // onSuccess: () =>
  //   //   queryClient.invalidateQueries({ queryKey: ["fetchAllUsers"] }),
  //   onError: () => {
  //     console.log("Error trying to add a user");
  //   },
  // });

  // const createUserMutation = useMutation({
  //   mutationFn: (newUser: Omit<TUser, "id">) => {
  //     return apiUser.post(newUser);
  //   },
  //   onError: () => {
  //     throw new Error("Error creating User");
  //   },
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({ queryKey: ["fetchAllUsers"] });
  //   // },
  // });
  // const createUser = (newUser: Omit<TUser, "id">) => {
  //   createUserMutation.mutate(newUser);
  // };

  // const deleteUserMutation = useMutation({
  //   mutationFn: (id: string) => apiUser.delete(id),
  //   onError: (e) => {
  //     throw new Error(e.message);
  //   },
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({
  //   //     queryKey: ["fetchAllUsers"],
  //   //   });
  //   // },
  // });
  // const deleteUser = (id: string) => {
  //   deleteUserMutation.mutate(id);
  // };

  // const updateUserMutation = useMutation({
  //   mutationFn: ({ id, user }: TUpdateMutationParams) => {
  //     return apiUser.update(id, user);
  //   },
  //   onError: () => {
  //     throw new Error("Error trying to update user");
  //   },
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({ queryKey: ["fetchAllUsers"] });
  //   // },
  // });
  // const updateUser = (id: string, user: Omit<Partial<TUser>, "id">) => {
  //   updateUserMutation.mutate({ id, user });
  // };

  // // const isUserEmailUsed = (email: string): boolean => {
  // //   return !!allUsers.find(
  // //     (user) => user.email.toLowerCase() === email.toLowerCase()
  // //   );
  // // };

  // // useEffect(() => {
  // //   if (allUsersData) {
  // //     setAllUsers(allUsersData);
  // //   }
  // // }, [allUsersData]);

  return (
    <>
      <UserContext.Provider
        value={{
          // allUsers,
          // isLoadingUsers,
          // createUser,
          // deleteUser,
          authenticatedUser,
          setAuthenticatedUser,
          // authenticate,
          // addUserMutation,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser should be used inside UserProvider");
  }
  return context;
};
