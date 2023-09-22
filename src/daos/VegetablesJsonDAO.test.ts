import { VegetablesJsonDAO } from "./VegetablesJsonDAO";
let vegetableDAO: VegetablesJsonDAO;

describe("Tests over VegetablesJsonDAO", () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesJsonDAO();
  });

  test("Retorna um Vegetal pelo id", () => {
    const vegetable = vegetableDAO.findVegetableById(3);
    expect(vegetable?.id).toBe(3);
  });

  test("Retorna um Vegetal pelo Nome", () => {
    const vegetable = vegetableDAO.findVegetableByName('Milho');
    expect(vegetable?.name).toBe('Milho');
  });

  test("Retorna um Vegetal pelo seu beneficio", () => {
    const vegetable = vegetableDAO.findVegetableByBenefits('Fonte de fibra');
    expect(vegetable?.benefits).toContain('Fonte de fibra');
  });
});
