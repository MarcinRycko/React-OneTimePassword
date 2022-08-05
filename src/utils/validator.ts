import { TInputDataElement } from './types';

class Validator {
  static isFormComplete = (inputData: TInputDataElement[]) => {
    return inputData
      .filter((el) => {
        return el.isDisabled === false;
      })
      .every((el) => {
        return el.value !== '';
      });
  };

  static isPasswordCorrect = (
    password: string,
    inputData: TInputDataElement[]
  ) => {
    const passwordArray = password.split('');
    return inputData
      .filter((el) => {
        return el.isDisabled === false;
      })
      .every((el) => {
        return el.value === passwordArray[el.index];
      });
  };
}

export default Validator;
