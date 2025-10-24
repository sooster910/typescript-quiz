import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

type OppositeGreeting<TGreeting>= TGreeting extends "hello" ? "goodbye" : "hello";

/**
 * 함수 인자의 리터럴 타입이 hello면 goodbgye 리터럴 타입을 리턴
 * 어떻게 추론하게 만들지?
 * 유니온 제약을 통해, hello, goodbye리터럴 타입으로 한정함.
 * 런타임코드의 분기문으로 리터럴 타입을 각 조건에 맞게 리턴했는데,  추론된 리턴타입은 여전히 hello|goodbye유니온이다.
 *
 * @param greeting
 */

type GreetingType<TGreeting> = TGreeting extends "goodbye" ? "hello" : "goodbye"

function youSayGoodbyeISayHello<TArg extends "hello" | "goodbye">(greeting: TArg) {
    return (greeting === "goodbye" ? "hello" : "goodbye") as GreetingType<TArg>
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
