import { getAllUsers } from "@/services/users/getAllUsers";
import { useEffect, useState } from "react";
import { Profile } from "../types/users";
import { errorHandler } from "./useErrorHanlder";

export function useUsers() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err: unknown) {
        errorHandler(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, setUsers };
}
