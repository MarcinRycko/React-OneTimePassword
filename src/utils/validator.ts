class Validator {
  static isFormComplete = (inputData: string[]) => {
    return inputData.every((el) => {
      return el !== '';
    });
  };

  static isPasswordCorrect = (
    password: string,
    inputData: string[],
    indexArray: number[]
  ) => {
    const passwordArray = password.split('');
    return inputData.every((el, index) => {
      return el === passwordArray[indexArray[index]];
    });
  };
}

export default Validator;
