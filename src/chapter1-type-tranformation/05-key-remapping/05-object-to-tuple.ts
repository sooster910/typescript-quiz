import {Equal, Expect } from "../../helper";

interface Values {
    email: string;
    firstName: string;
    lastName: string;
}
// 각 키와 쌍을 튜플로 만들어서 유니온 타입으로 변환
// 중요한건 loop으로 돌릴수 있게 해야 한다.
// 그래서 key를 접근할수 있어야 하고, 그 키를 이용해서 value도 접근할수 있어야 한다.
type ObjectWithTupleValue = {[K in keyof Values]: [ K, Values[K] ]}

//{key:value }에서 value파트를 유니온 타입으로 변환하기 위해 keyof를 한번더 사용
type ValuesAsUnionOfTuples =  {[K in keyof Values]: [ K, Values[K] ]}[keyof Values]



type tests = [
    Expect<
        Equal<
            ValuesAsUnionOfTuples,
            ["email", string] | ["firstName", string] | ["lastName", string]
        >
    >
];
