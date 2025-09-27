type A =
    | {
    type: "a";
    a: string;
}
    | {
    type: "b";
    b: string;
}
    | {
    type: "c";
    c: string;
    d: string;
};

type B = "a" | "b" | "c";

//enum 의 경우 자동으로 0,1,2 숫자가 할당됨
//문자열로 지정도 가능

enum C {
    a,
    b ,
    c
}
