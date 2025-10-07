import { Drink } from "../src/drink";
import { CoffeeMachine } from "../src/coffeeMachine";

import * as notifications from "../src/utils/notifications";

describe("CoffeeMachine notifications (mocks)", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("notifies user about serving drink", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 0, "small");
        const notifyUserSpy = jest
            .spyOn(notifications, "notifyUser")
            .mockImplementation(jest.fn());

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Coffee (small)");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });

    it("notifies user about serving drink 2", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 0, "small");
        const notifyUserSpy = jest
            .spyOn(notifications, "notifyUser")
            .mockImplementation(jest.fn());

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Coffee (small)");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });
});
