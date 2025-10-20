import {Equal, Expect} from "../../helper";

/**
 * 주어진 이름 template literal 에서  lastname 추출하기
 */
type Names = [
    "Junsuk Park",
    "Bill Evans",
    "Stan Getz",
];

type First = Names[0] //Junsuk Park

//type GetSurname<T> = T extends Names에 포함되는 원소라면 infer Name ? Name: never;
//firstname과 lastname사이 space를 기준으로 추론하기?
type GetSurname<T> = T extends `${string} ${infer LastName}`? LastName : never;

// type GetSurname<T> = T extends `${infer FirstName} ${infer LastName}`? LastName : never;

type MyName = ["hyunsu joo"]
type LastName = GetSurname<MyName[0]>

// const lastName:LastName = "" ""is not assignable to type "joo"

type tests = [
    Expect<Equal<GetSurname<Names[0]>, "Park">>,
    Expect<Equal<GetSurname<Names[1]>, "Evans">>,
    Expect<Equal<GetSurname<Names[2]>, "Getz">>,
];
