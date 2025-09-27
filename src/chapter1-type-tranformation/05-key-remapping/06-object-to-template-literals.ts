import {Equal, Expect } from "../../helper";

interface FruitMap {
    apple: "red";
    banana: "yellow";
    orange: "orange";
}
//keyof FruitMap => "apple" | "banana" | "orange" //union type
//FruitMap[K] => "red" | "yellow" | "orange"

// in을 이용해 key를 순회하면서 value도 접근하도록 한다.
//{[K in keyof FruitMap]: `${K}:${FruitMap[K]}`} => {
//  apple: "apple:red";
//  banana: "banana:yellow";
//  orange: "orange:orange";
//}


type TransformedFruit = {[K in keyof FruitMap]: `${K}:${FruitMap[K]}`}[keyof FruitMap]

type tests = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];
