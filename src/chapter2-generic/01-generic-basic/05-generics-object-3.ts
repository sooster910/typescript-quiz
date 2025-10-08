import {Equal, Expect} from "../../helper";

type CreateDataShape<TData, TError=undefined> = {
    data: TData;
    error: TError;
};


type tests = [
    Expect<
        Equal<
            CreateDataShape<string>, //타입 매개변수 생락이 가능하다
            {
                data: string;
                error: undefined;
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
