export const fetchApi = async <T>(
  url: string,
  init?: RequestInit & { next?: { revalidate?: number } },
): Promise<T | null> => {
  try {
    const res = await fetch(url, init);
    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};
