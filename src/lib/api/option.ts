const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk5MzRjZmY0ZTZkYzYxYjM3OGYyZDI0NjQ1MDIyNiIsIm5iZiI6MTc3MDYwNzgwMy45MDgsInN1YiI6IjY5ODk1NGJiYjljNmUwNTAxMDhjOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADU9lSBgWoG_Xg1CZAqAwxrYCvdJu7STsz4cxQu-PNI";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
