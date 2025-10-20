import {Equal, Expect} from "../../helper";

interface MyComplexInterface<Event, Context, Name, Point> {
    getEvent: () => Event;
    getContext: () => Context;
    getName: () => Name;
    getPoint: () => Point;
}

/**
 * 제네릭 타입을 받아 마지막 제네릭 값을 추론
 */
type Example = MyComplexInterface<
    "click",
    "window",
    "my-event",
    { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer PointData>? PointData : never

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
