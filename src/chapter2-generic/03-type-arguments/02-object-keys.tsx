import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

/**
 * 현재는 string[]
 *
 *
 * 배열이 Record<string, number> 로 할당 가능한 이유 = 배열 내부 구조
 * 배열은 숫자 인덱스를 문자열 키로 변환해 접근
 * const arr = [10,20,30]
 * arr[0] === arr["0"] // javascript에서 true
 * 그러므로 Record<string, number> 로 할당 가능함
 *
 * 순수객체만 받으려면?
 * 1. 런타임 체크 : Array.isArray로 배열 걸러내기
 * 2. 컴파일 타임체크 : 인터섹션 타입을 적용
 * {[key:string] : unknown} & {length?:never} <-두개의 조건을 모두 만족해야함
 * length라는 선택적 속성이 있으면 never를 통해 아무값도 가질 수 없게 한다.
 *
 * 컴파일러는 never를 어떻게 이해하고 동작할까?
 *
 * 원래 배열은 length: number속성을 가지고 있는데 이걸 never로 만들어 주면, length엔 값이 있으면 컴파일러가
 * 타입체크를 한다. 값이 없는 타입이어야 하는데 값이 있는 타입이므로 컴파일 에러를 낸다. (number가 never에 할당될 수 없으므로 )
 *
 *
 * 또한
 * Object.keys의 as를 통해 타입을 강제해야한다.
 * @param obj
 */

// first try
// const typedObjectKeys =<T extends Record<string, any>>(obj:T) => {
//     return Object.keys(obj) as Array<keyof T>;
// };

const typedObjectKeys = <T extends {[key:string]:unknown} & {length?:never},>(obj:T)=>{
    return Object.keys(obj) as Array<keyof T>;
}
// 여전히 배열 통과
// const typedObjectKeys2 = <TKey extends string>(obj:Record<TKey, any>)=>{
//     return Object.keys(obj) as Array<keyof TKey>;
// }

const result1 = typedObjectKeys({"a":1, "b":2});
//@ts-expect-error : 의도된 타입 에러 확인용 배열은 허용되지 않도록 해야합니다.
const result2 = typedObjectKeys(["a","B"]) //type error

const nested = { a: { x: 1 }, b: { y: 2 } };
const result3 = typedObjectKeys(nested)


it("Should return the keys of the object", () => {

    expect(result1).toEqual(["a","b"]);
    type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
    type testNested = Expect<Equal<typeof result3, Array<"a"|"b">>>;

    // type test1 = Expect<Equal<typeof result3, >>
});
