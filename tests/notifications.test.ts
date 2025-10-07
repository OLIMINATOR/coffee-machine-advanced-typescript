import fetch from "node-fetch";
import { notifyUser } from "../src/utils/notifications";

jest.mock("node-fetch", () => jest.fn());

jest.useFakeTimers({ now: new Date("2025-01-01") });

describe("notifyUser", () => {
    it("calls fetch with correct URL, method and payload", async () => {
        // arrange
        const message = "Hello World";
        const fetchSpy = jest.mocked(fetch);
        fetchSpy.mockResolvedValue({ ok: true } as any);

        // act
        await notifyUser(message);

        const date = new Date();
        const formattedDate = date.toISOString();

        // expect
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(
            "https://example.com/api/notify",
            {
                body: `{"message":"Hello World","timestamp":"${formattedDate}"}`,
                headers: { "Content-Type": "application/json" },
                method: "POST",
            }
        );
    });
});
