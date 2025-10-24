import {Equal, Expect} from "../../helper";

/**
 * 현재 타입추론은 string[] 으로 넓은 타입이 추론된다.  배열의 각 요소를 리터럴 타입 으로 추론
 *
 * 해결방법:
 * extends string 제약조건을 사용해서 TStatuses가 string타입의 하위타입이어야 함을 이용
 * 하위타입에 리터럴 타입도 포함 되므로, TStatuses가 리터럴 타입의 배열로 추론됨
 *
 *
 * @param statuses
 */
const makeStatus = <TStatuses extends string>(statuses: TStatuses[]) => {
    return statuses;
};

const onlyInfo = <T extends string>(info:T):T=>{
    return info
}

const result = onlyInfo("INFO")

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);
statuses.map((status )=> {
    if(status==="WARNING"){// 타입추론

    }
})

type tests = [
    Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];


/**
 * as const를 이용해서 해결하는 방법
 */
const statusList = ["INFO", "DEBUG", "ERROR", "WARNING"] as const; //as const를 사용하면 리터럴 타입을 유지 → readonly tuple
statusList.map((status)=> {
    if(status === "ERROR"){ // 타입추론

    }})

type Status = typeof statusList[number];
const a : Status = "INFO" // 타입추론

