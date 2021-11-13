import { useState, useEffect } from "react";

export function useQueryFetch<T>(query: () => Promise<T[]>): T[] {
  const [response, setResponse] = useState<T[]>([]);

  useEffect(() => {
    query().then((res) => setResponse(res));
  }, []);

  return response;
}
