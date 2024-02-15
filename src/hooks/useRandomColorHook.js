export const useRandomColorHook = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomBackground = `rgba(${parseInt(
    randomColor.slice(0, 2),
    16
  )}, ${parseInt(randomColor.slice(2, 4), 16)}, ${parseInt(
    randomColor.slice(4, 6),
    16
  )}, 0.4)`;

  return randomBackground;
};
