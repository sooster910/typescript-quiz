import {Equal, Expect } from "../../helper";

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}

// 1. keyof 확인용 코드
//type AttributeKeys = keyof Attributes;
//const getAttr=(key: AttributeKeys)=> {}
// getAttr()


type AttributeGetters = {
   [k in keyof Attributes] : ()=> Attributes[k]
}

type tests = [
    Expect<
        Equal<
            AttributeGetters,
            {
                firstName: () => string;
                lastName: () => string;
                age: () => number;
            }
        >
    >,
];
