import {Equal, Expect} from "../../helper";
import {infer} from "zod";

/**
 *  객체에서 data 프로퍼티의 타입을 추출하기
 * 
 * 
 */

// type GetDataValue<T> = T extends {data: 여기에 뭔가 추론 } ? 추론된결과: never;
type GetDataValue<T> =  T extends {data: infer T2}? T2:never


type tests = [
    Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
    Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
    Expect<
        Equal<
            GetDataValue<{ data: { name: "hello"; age: 20 } }>,
            { name: "hello"; age: 20 }
        >
    >,
    // Expect that if you pass in string, it
    // should return never
    Expect<Equal<GetDataValue<string>, never>>,
];
