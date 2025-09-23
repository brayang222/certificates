import { SetStateAction, useEffect, useState } from "react";
import { Profile } from "../types/users";
import { getUserById } from "@/services/users/getUserById";
import { errorHandler } from "@/lib/errorHandler";

export function useUser(id: string) {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (err: unknown) {
        errorHandler(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id]);

  return { user, loading };
}
