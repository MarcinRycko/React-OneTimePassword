class Randomizer {
  private static getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  static getDisabledInputIndexes = (password: string) => {
    const result: number[] = [];
    const numberOfDisabledPasswordField: number = Math.floor(
      password.length / 2 - 1
    );
    const numberOfDisabledFieldOnTheEnd: number = this.getRandomInt(2, 6);
    [...new Array(numberOfDisabledPasswordField)].map((_) => {
      let newIndex = this.getRandomInt(0, password.length - 1);
      while (result.includes(newIndex)) {
        newIndex = this.getRandomInt(0, password.length - 1);
      }
      return result.push(newIndex);
    });
    for (let i = 0; i < numberOfDisabledFieldOnTheEnd; i++) {
      result.push(password.length + i);
    }
    return result;
  };
}

export default Randomizer;
