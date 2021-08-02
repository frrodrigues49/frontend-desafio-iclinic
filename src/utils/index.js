import { DARK_NAME, LIGHT_NAME } from "../constants/themes";

const saveTheme = (theme, name) => {
  const data = JSON.stringify({
    theme,
    name,
  });

  return data;
};

export const handleStart = async ({ history, setLoading }) => {
  try {
    setLoading(true);
    const response = await Promise.race([
      fetch("https://swapi.dev/api/people/1"),
      fetch("https://swapi.dev/api/people/4"),
    ]);

    const result = await response.json();

    switch (result.name) {
      case DARK_NAME:
        setLoading(false);
        localStorage.setItem("THEME", saveTheme("dark", result.name));
        return history.push(`/theme/dark`);
      case LIGHT_NAME:
        setLoading(false);
        localStorage.setItem("THEME", saveTheme("light", result.name));
        return history.push(`/theme/light`);
      default:
        setLoading(false);
        return history.push("*");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
