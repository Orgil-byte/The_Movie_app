const token = process.env.TMDB_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  cache: "no-store" as RequestCache,
};
