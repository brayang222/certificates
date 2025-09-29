import { getAllUsers } from "@/services/users/getAllUsers";
import { useEffect, useState, useCallback } from "react";
import { Profile } from "../types/users";
import { errorHandler } from "./useErrorHandler";

export function useUsers() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (err: unknown) {
      errorHandler(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, setUsers, refetch: fetchUsers };
}
