import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

/**
 * 어떤 입력이 들어오더라도, 그 타입 정보를 잃지 않고 그대로 보존하게 하기
 *
 * 제네릭(generic)을 이용해 클래스 내부 상태의 타입을 안전하게 추론하기
 * 지금은 props가 unknown 타입
 * new Component({ a: 1, b: 2, c: 3 })를 만들어도 component.getProps의 타입이 unknown으로 추론됨
 *
 */
export class Component<T> {
    private props;

    constructor(props:T) {
        this.props = props;
    }

    getProps = () => this.props;
}


class APIResponse<T>{
    constructor(private data:T) {
        this.data = data

    }
    getData(){
        return this.data
    }
}

const apiResponse = new APIResponse({name: "sue"})
const data = apiResponse.getData()


it("Should create an object containing props", () => {
    const component = new Component({ a: 1, b: 2, c: 3 });

    const result = component.getProps();

    expect(result).toEqual({ a: 1, b: 2, c: 3 });

    type tests = [
        Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
    ];
});
