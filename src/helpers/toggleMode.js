export const toggleMode = (mode, setMode) => {
  const actualState = mode === 'dark' ? 'light' : 'dark'
  localStorage.setItem('mode', actualState);
  setMode(actualState);
};