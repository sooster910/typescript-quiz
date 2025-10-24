import {Equal, Expect} from "../../helper";

/**
 * 문자열 리터럴 타입과 숫자 리터럴 타입을 추론하기
 * 어떻게 해야 더 구체적으로 추론할 수 있을까?
 * extends로 제한하려고 하니 T 를 직접 추론해야할것 같음.
 * T를 직접 추론하려면 함수시그니처로 만들어서 추론해야하는데
 *
 * @param t
 */
export const inferItemLiteral = <T extends string|number|boolean>(t: T ) => ({
    output: t,
});

const result1 = inferItemLiteral("a"); //{output:string} => {output:"a"} 추론해야함.
const result2 = inferItemLiteral(123); //{output:number} => {output:123}추론해야함.

type tests = [
    Expect<Equal<typeof result1, { output: "a" }>>,
    Expect<Equal<typeof result2, { output: 123 }>>
];
// @ts-expect-error : object는 허용하지 않도록 해야한다.
const error1 = inferItemLiteral({
    a: 1,
});

// @ts-expect-error : 배열은 허용하지 않도록 해야한다.  이때 ts-expect-error 를 쓰는게 정확하게 맞는 의도인지?
//
const error2 = inferItemLiteral([1, 2]);
