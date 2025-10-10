/**
 * T extends {} 의 {}는 객체 타입이 아니 null과 udnefined를 제외한 모든 값을 포함하는 타입
 * 값이 존재할 수도, 없을 수도 있는 타입을 안전하게 표현하는 유틸리티 타입
 */

export type Maybe<T extends {}> = T | null | undefined
export type MaybeUndefined<T extends {}> = T | undefined

type User = {
    phone?:string
}

/**
 * Maybe를 사용하지 않을 경우 undefined가 될 수 있는 상황에서 undefined의 타입추론을 하지 못해
 * 런타임에서 이슈가 되는 상황을 마주하게 될 수 있음.
 * @param user
 */

function getUser(user:User){
     //undefined일수 있는데 에러를 내지 않는다.
    user.phone
}

function getUser2(user:Maybe<User>){
    user.phone // user is possibly null or undefined
}


type NumberType = Maybe<number>
type StringType = Maybe<string>

// @ts-expect-error
type NullableType = Maybe<null>

// @ts-expect-error
type UndefinedType = Maybe<undefined>
const nulltype:NullableType = null

//어떤값이든 T, null, undefined모두 올수있음
type Everything<T> = null|undefined|T

export type NonNullableResponse<T>={
    [K in keyof T]: Everything<T[K]>
}

type ApiResponse = {
    user?: {
        name: string | null;
        age?: number;
    };
};
const response:ApiResponse ={}

const name = response.user //undefined일수도 있음, -> 에러를 내지 않는 이유 : 모든 가능한 상태를 보존하는 쪽이 TypeScript의 설계 철학


const age = response.user?.age??0


/**
 * 응용
 *
 */
type SafeUser = NonNullableResponse<ApiResponse["user"]>


function getUser(user:SafeUser){
    user.name
}


/**
 *
 * nullish 값을 금지하고  유효한 값만 허용.
 * nullish(값이 비어있다) 와 falsy(값이 거짓이다,유효한값이 아니다) 구분에 유의해 Mayby에서 nullish 값이 들어오면 에러가 나야함.
 * null과 undefined를 허용하지 않는 안전한 타입래퍼
 *
 */

type tests = [

    Maybe<null>,
    Maybe<undefined>,

    Maybe<string>,
    Maybe<false>,
    Maybe<0>,
    Maybe<"">,
];
