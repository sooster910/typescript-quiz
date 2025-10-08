import {Equal, Expect} from "../../helper";

/**
 * E 의 제약조건을 TypeError라고 지정해도 테스트가 통과하고, SyntaxError라고 지정해도 테스트가 통과한다.
 * 왜그럴까?
 */


type CreateDataShape<D,E extends TypeError> = {
    data: D;
    error: E;
};

type tests = [
    Expect<
        Equal<
            CreateDataShape<string, TypeError>,
            {
                data: string;
                error: TypeError;
            }
        >
    >,
    Expect<
        Equal<
            CreateDataShape<number, Error>,
            {
                data: number;
                error: Error;
            }
        >
    >,
    Expect<
        Equal<
            CreateDataShape<boolean, SyntaxError>,
            {
                data: boolean;
                error: SyntaxError;
            }
        >
    >,
];
