import {Equal, Expect} from "../../helper";

/**
 * hello를 generic으로 설정하면 타입추론이 goodbye가 나와야 하고
 * goodbye를 generic으로 설정하면 타입추론이 hellow로 나와야 한다.
 */

type YouSayGoodbyeAndISayHello<T> = T extends "hello"?  "goodbye" :"hello";


type tests = [
    Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
    Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
