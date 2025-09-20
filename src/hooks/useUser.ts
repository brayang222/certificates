import { useEffect, useState } from "react"
import { Profile } from "../types/users"
import { getUserById } from "@/services/users/getUserById"

export function useUser(id: string) {
  const [user, setUser] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserById(id)
        setUser(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
          setError(err.message)
          } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [id])

  return { user, loading, error }
}
