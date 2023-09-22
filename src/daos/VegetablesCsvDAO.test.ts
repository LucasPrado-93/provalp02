import { VegetablesCsvDAO } from "./VegetablesCsvDAO";
let vegetableDAO: VegetablesCsvDAO;
describe("VegetablesCsvDAO", () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesCsvDAO();
  });
test("Retorna um Vegetal pelo Nome", () => {
    const vegetable = vegetableDAO.findVegetableByName('Tomate');
    expect(vegetable?.name).toBe('Tomate');
  });

  test("Retorna um Vegetal pelo id", () => {
    const vegetable = vegetableDAO.findVegetableById(1);
    expect(vegetable?.id).toBe(1);
    console.log(vegetable?.id);
    
  });

  test("Retorna um Vegetal pelo seu beneficio", () => {
    const vegetable = vegetableDAO.findVegetableByBenefits('Previne');
    expect(vegetable?.benefits).toBe('Previne');
  });
});
