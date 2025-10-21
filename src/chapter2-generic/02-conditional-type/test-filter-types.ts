/**
 * null종류의 값 거르기
 */

// 타입 필터링 테스트
const array = [1, "hello", null, 2, undefined, "world", false, 0,""] as const;

console.log("Original array:", array);

// 1. NonNullable 사용
const filtered1 = array.filter((x): x is NonNullable<typeof x> => x != null);
console.log("NonNullable result:", filtered1);
// 타입 확인을 위한 변수
const typeCheck1: typeof filtered1 = filtered1;

// 2. Exclude 사용
const filtered2 = array.filter((x): x is Exclude<typeof x, null | undefined> => x != null);
console.log("Exclude result:", filtered2);
// 타입 확인을 위한 변수
const typeCheck2: typeof filtered2 = filtered2;

// 3. 명시적 타입 가드
function isNotNullish<T>(value: T | null | undefined): value is T {
  return value != null;
}
const filtered3 = array.filter(isNotNullish);
console.log("Type guard result:", filtered3);
const typeCheck3: typeof filtered3 = filtered3;

// 4. 타입 확인을 위한 hover 테스트
// filtered1, filtered2, filtered3의 타입이 어떻게 추론되는지 확인
export { filtered1, filtered2, filtered3 };


//5. es-toolkit isNotNill 평가
export function isNotNil<T>(x: T | null | undefined): x is T {return x != null;}

const notnillarray = array.filter(isNotNil)