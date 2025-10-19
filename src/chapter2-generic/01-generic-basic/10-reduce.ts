import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

const array = [
    {
        name: "Park",
    },
    {
        name: "Kim",
    },
];
//현재 obj는 {} 로만 추론,  array :{name:string}[] 으로 추론됨   name의 타입이 string인데 index타입에는 올 수 없는 에러를 풀어야 하는 상황
const obj = array.reduce<Record<string, {name:string}>>((accum, item) => {
    accum[item.name] = item;
    return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
    expect(obj).toEqual({
        Park: {
            name: "Park",
        },
        Kim: {
            name: "Kim",
        },
    });

    type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
