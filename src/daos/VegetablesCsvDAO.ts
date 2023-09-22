import { Vegetables } from "../models/Vegetables";
import { VegetablesDAO } from "./VegetablesDAO";

export class VegetablesCsvDAO extends VegetablesDAO {
  constructor() {
    super('vegetables.csv');
    const Arr = this._strVegetables.split('\r\n').splice(1, 22);
    for (let i = 0; i < Arr.length; i++) {
      let vegetable: Vegetables = {
        id: 0,
        name: '',
        imageURL: '',
        benefits: '',
      };
      const vegetal = Arr[i].split('"');
      for (let a = 0; a < vegetal.length - 1; a++) {
        const line = vegetal[a].split(',');
        if (a % 2 == 0) {
          vegetable.id = Number(line[0]);
          vegetable.name = line[1];
          vegetable.imageURL = line[2];
        } else {
          vegetable.benefits = line.join(',');
          this._vegetables.push(vegetable);
        }
      }
    }
  }
}
