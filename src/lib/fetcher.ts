export const api = {
  get: async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    return res.json() as T;
  },
  post: async <T>(url: string, body: unknown, init?: RequestInit) => {
    const res = await fetch(url, {
      ...init,
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return res.json() as T;
  },
  put: async <T>(url: string, body: unknown, init?: RequestInit) => {
    const res = await fetch(url, {
      ...init,
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return res.json() as T;
  },
  delete: async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, {
      ...init,
      method: "DELETE",
    });
    return res.json() as T;
  },
};
