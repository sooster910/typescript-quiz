import {Equal, Expect} from "../../helper";

/**
 * 제네릭 인자를 string으로 제한하기
 * @param t
 */
export const returnWhatIPassIn = <T extends string>(t: T) => t
const a = returnWhatIPassIn("b");
//@ts-expect-error
type test1 = Expect<Equal<typeof a, "a">>;

declare function onlyNumber(x: number): void; // 올바른 사용 onlyNumber(123); // 틀린 사용 – 에러가 반드시 나야 함 //
//@ts-expect-error
onlyNumber("abc"); // 원본 코드가 잘못되었음

//@ts-expect-error
returnWhatIPassIn(1);

//@ts-expect-error
returnWhatIPassIn(true);

//@ts-expect-error
returnWhatIPassIn({
    foo: "bar",
});
