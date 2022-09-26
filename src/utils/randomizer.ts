class Randomizer {
  static getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  static getActiveInputsIndexes = (password: string) => {
    const numberOfActivePasswordField: number = Math.floor(password.length / 2);
    return [...new Array(numberOfActivePasswordField)]
      .reduce((result: number[], item: number) => {
        item = this.getRandomInt(0, password.length - 1);
        while (result.includes(item)) {
          item = this.getRandomInt(0, password.length - 1);
        }
        result.push(item);
        return result;
      }, [])
      .sort((a: number, b: number) => a - b);
  };
}

export default Randomizer;
