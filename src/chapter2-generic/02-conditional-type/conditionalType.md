


### 특정 키이름 패턴식별해 원하는 키:밸류 추출

> ## tl;dr
> as 절: 키를 변환/필터링하는 문법
> extends: 조건부 타입 체크 (패턴 매칭)
> never: 조건이 맞지 않으면 해당 키를 제거
> Template Literal: 문자열 패턴 매칭



## 1️⃣ 기본 구조 분석

```typescript
type OnlyIdKeys<T> = {
    [K in keyof T as K extends `${string}${"id"|"Id"}` ? K : never]: T[K]
}
```

이걸 세 부분으로 나눠서 생각해보기

### **Part 1: `[K in keyof T as ...]`**
```typescript
[K in keyof T as 새로운키]
```
- `K in keyof T`: Example의 모든 키를 순회 (name, age, id, organisationId, groupId)
- `as 새로운키`: 키를 변환하거나 필터링 (Key Remapping)

### **Part 2: `K extends `${string}${"id"|"Id"}` ? K : never`**
이 부분이 **필터 조건**:

```typescript
K extends `${string}${"id"|"Id"}` 
```

이건 Template Literal Type으로:
- `${string}`: 임의의 문자열이 앞에 올 수 있음
- `${"id"|"Id"}`: 끝이 "id" 또는 "Id"로 끝나야 함

즉, **"id"나 "Id"로 끝나는 키인지 체크**

### **Part 3: `? K : never`**
- 조건이 **참**이면: `K` (키를 그대로 유지)
- 조건이 **거짓**이면: `never` (키를 제거)

⭐ **`never`는 타입에서 자동으로 제거!**

## 2️⃣ 실행 과정 시뮬레이션

```typescript
interface Example {
    name: string;           // ❌ "name"은 id로 끝나지 않음 → never → 제거
    age: number;            // ❌ "age"는 id로 끝나지 않음 → never → 제거
    id: string;             // ✅ "id"로 끝남 → "id" 유지
    organisationId: string; // ✅ "Id"로 끝남 → "organisationId" 유지
    groupId: string;        // ✅ "Id"로 끝남 → "groupId" 유지
}
```

## 3️⃣ 단계별 이해를 위한 예시

```typescript
// Step 1: 모든 키 순회만
type Step1<T> = {
    [K in keyof T]: T[K]
}
// 결과: Example과 동일 (모든 프로퍼티)

// Step 2: 조건 체크 추가 (as 없이)
type Step2<T> = {
    [K in keyof T]: K extends `${string}Id` ? T[K] : never
}
// 결과: { name: never, age: never, id: string, organisationId: string, ... }
// ⚠️ 키는 그대로 있고, 값만 never

// Step 3: as로 키 자체를 필터링
type Step3<T> = {
    [K in keyof T as K extends `${string}Id` ? K : never]: T[K]
}
// 결과: { id: string, organisationId: string, groupId: string }
// ✅ never인 키는 아예 제거됨!
```

## 4️⃣ Template Literal 패턴 예시

```typescript
// "Id"로 끝나는 것만
K extends `${string}Id` 
// ✅ userId, productId
// ❌ id, ID

// "id" 또는 "Id"로 끝나는 것
K extends `${string}${"id"|"Id"}`
// ✅ id, userId, productId
// ❌ ID, identity

// "get"으로 시작하는 것
K extends `get${string}`
// ✅ getName, getAge
// ❌ setName, name

// 정확히 일치
K extends "id"
// ✅ id만
// ❌ userId, productId
```

## 5️⃣ 실무 활용 예시

```typescript
// API 응답에서 ID 필드만 추출
type IdFields<T> = {
    [K in keyof T as K extends `${string}Id` ? K : never]: T[K]
}

// 함수명에서 getter만 추출
type Getters<T> = {
    [K in keyof T as K extends `get${string}` ? K : never]: T[K]
}

// private 필드 제거
type PublicFields<T> = {
    [K in keyof T as K extends `_${string}` ? never : K]: T[K]
}
```





