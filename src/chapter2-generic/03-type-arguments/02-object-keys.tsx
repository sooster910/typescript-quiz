import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

const typedObjectKeys = (obj: unknown) => {
    return Object.keys(obj);
};

it("Should return the keys of the object", () => {
    const result1 = typedObjectKeys({
        a: 1,
        b: 2,
    });

    expect(result1).toEqual(["a", "b"]);

    type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
