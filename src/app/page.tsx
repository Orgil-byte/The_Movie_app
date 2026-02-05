import MovieAppMain from "./_components/MovieAppMain";
import { ThemeProvider } from "next-themes";

const Main = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MovieAppMain />
    </ThemeProvider>
  );
};

export default Main;
