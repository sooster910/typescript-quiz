import {Equal, Expect} from "../../helper";

interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

/**
 * key가 id가 포함된 타입들을 추출해내기
 */
type OnlyIdKeys<T> = {
    [K in keyof T as K extends `${string}${"id"|"Id"}`?K:never]:T[K]
}
type Confirm = OnlyIdKeys<Example>

type tests = [
    Expect<
        Equal<
            OnlyIdKeys<Example>,
            {
                id: string;
                organisationId: string;
                groupId: string;
            }
        >
    >,
    Expect<Equal<OnlyIdKeys<{}>, {}>>
];