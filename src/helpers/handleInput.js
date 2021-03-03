export const handleInput = (e, setInputData, inputData) => {
  const { name, value } = e.target;
  setInputData({
    ...inputData,
    [name]: value
  })
};