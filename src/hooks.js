import { useState } from "react";

export const useField = (initValue = "", errorSupport = false) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  if (errorSupport) {
    return { value, setValue, error, setError, onChange };
  }
  return { value, onChange };
};

export const useDarkMode = (currentTheme) => {
  const [theme, setTheme] = useState(currentTheme);
  const {
    theme: { palette: type },
  } = theme;
};
