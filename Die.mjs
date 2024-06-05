export default class Die {
    constructor(values) {
      this.values = values;
    }
    static createDie(type) {
      let values;
      switch (type) {
        case "D3":
          values = [1, 2, 3];
          break;
        case "D5":
          values = [1, 2, 3, 4, 5];
          break;
        case "D20":
          values = [];
          for (let i = 0; i < 20; i++) {
            values.push(i);
          }
          break;
        case "D100":
            values = [];
            for (let i = 0; i < 100; i++) {
              values.push(i);
            }
          break;
      }
      return new Die(values);
    }

    roll() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
      }
      
  }
  