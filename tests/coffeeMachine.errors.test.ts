import { Drink } from "../src/drink";
import { CoffeeMachine } from "../src/coffeeMachine";

describe("CoffeeMachine errors", () => {
    it("throws too much sugar error", () => {
        const machine = new CoffeeMachine();
        const sugarCubes = 8906879567835425;
        const drink = new Drink("Tea", 2, false, sugarCubes, "small");

        try {
            machine.serve(drink, 2.1, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Too much sugar"));
        }
    });

    it("throws not enough money error", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Tea", 452, false, 1, "small");

        try {
            machine.serve(drink, 45.1, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Not enough money"));
        }
    });
});
