import {Equal, Expect} from "../../helper";

/**
 *hello이면 goodbye , goodbye-> hello, goodbye도 hello도 아닌 다른 타입은, never
 */
type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye" ? GoodbyeOrHello<T>: never
type GoodbyeOrHello<T> = T extends "goodbye" ? "hello" :"goodbye"


type ConfirmType = YouSayGoodbyeAndISayHello<"abc">



type tests = [
    Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
    Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
    Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
    Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
