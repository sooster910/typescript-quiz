import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

const fetchData = async <Data>(url: string):Promise<Data> => {
    return await fetch(url).then((response) => response.json());
};

it("Should fetch data from an API", async () => {
    const data = await fetchData<{ name: string }>(
        "https://swapi.dev/api/people/1",
    );
    expect(data.name).toEqual("Luke Skywalker");

    type tests = [Expect<Equal<typeof data, { name: string }>>];
});

