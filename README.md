# Advanced TypeScript Quiz & Learning Repository

> TypeScript의 고급 타입 시스템과 제네릭을 활용한 실전 문제 해결 능력 위한 프로젝트

## 📋 프로젝트 개요

이 프로젝트는 [실전 연습으로 익히는 고급 타입스크립트 기술](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84%EC%97%B0%EC%8A%B5-%EA%B3%A0%EA%B8%89-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8) 강의에서 제공된 문제들을 기반으로 구성된 학습 레포지토리입니다.

각 챕터별로 점진적으로 난이도가 증가하는 문제들을 통해 TypeScript의 강력한 타입 시스템을 마스터할 수 있습니다.

## 📈회고/배운점

### Chapter 2.Generic

## [코드에 의도를 담아내기: TypeScript @ts-expect-error 침묵보단 터트림으로 ](./src/chapter2-generic/01-generic-basic/ts-ignore-and-expect-error.md)

## 📚 챕터 구성

### Chapter 1: Type Transformation

- **기본 타입 변환**: `keyof`, `typeof`, 인덱스 접근
- **함수 타입**: 반환 타입, 매개변수 타입, Promise 타입
- **유니온 타입**: 구별된 유니온, `Extract`, `Exclude` 유틸리티
- **인덱싱**: 인덱스 접근, `as const`, 객체 값 추출
- **템플릿 리터럴**: 문자열 패턴, `Uppercase` 등 문자열 조작
- **키 리매핑**: 유니온을 객체로 변환, 객체를 튜플로 변환

### Chapter 2: Generics

- **기본 제네릭**: 타입 매개변수, 제약 조건
- **조건부 타입**: `extends`를 활용한 타입 분기
- **타입 인수**: 함수 오버로드와 제네릭
- **고급 제네릭**: 재귀적 타입, 복잡한 타입 조합
- **함수 오버로드**: 다양한 시그니처 처리

### Chapter 3: Advanced Patterns

- **브랜드 타입**: 타입 안전성을 위한 브랜딩
- **글로벌 타입**: 전역 타입 확장
- **타입 가드 & 어설션 함수**: 런타임 타입 검증
- **클래스**: 고급 클래스 패턴
- **외부 라이브러리**: 타입 정의와 확장
- **식별 함수**: 타입 추론 개선

### Chapter 4: Latest TypeScript

- **`satisfies` 연산자**: 강력한 타입 검사
- **데코레이터**: 메타데이터와 데코레이터 패턴

## 🛠️ 기술 스택

- **TypeScript 5.0+**: 최신 TypeScript 기능 활용
- **Vite**: 빠른 개발 환경
- **Vitest**: 타입 테스트 프레임워크
- **Zod**: 런타임 타입 검증
- **Lodash**: 유틸리티 함수 타입 정의

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📁 프로젝트 구조

```
src/
├── chapter1-type-tranformation/    # 타입 변환 기법
│   ├── 00-basic/                   # 기본 개념
│   ├── 01-function/                # 함수 타입
│   ├── 02-union/                   # 유니온 타입
│   ├── 03-indexing/                # 인덱싱
│   ├── 04-template-literals/       # 템플릿 리터럴
│   └── 05-key-remapping/           # 키 리매핑
├── chapter2-generic/               # 제네릭
│   ├── 01-generic-basic/           # 기본 제네릭
│   ├── 02-conditional-type/        # 조건부 타입
│   ├── 03-type-arguments/          # 타입 인수
│   ├── 04-generics-advanced/       # 고급 제네릭
│   ├── 05-function-overload/       # 함수 오버로드
│   └── challenge/                  # 도전 문제
├── chapter3-advanced-pattern/      # 고급 패턴
│   ├── 01-branded-types/           # 브랜드 타입
│   ├── 02-globals/                 # 글로벌 타입
│   ├── 03-type-predicates-assertion-functions/  # 타입 가드
│   ├── 04-classes/                 # 클래스
│   ├── 05-external-libraries/      # 외부 라이브러리
│   ├── 06-identity-functions/      # 식별 함수
│   └── 07-challenges/              # 도전 문제
├── chapter4-latest-typescript/     # 최신 TypeScript
│   ├── 01-satisfies.ts
│   ├── 02-satisfies.ts
│   └── decorator/                  # 데코레이터
└── helper.ts                       # 유틸리티 타입
```

## 💡 주요 특징

### 🧪 타입 테스트 시스템

각 문제는 `Expect`와 `Equal` 유틸리티 타입을 사용하여 타입 레벨에서 테스트됩니다:

```typescript
type tests = [
  Expect<Equal<MyType, ExpectedType>>,
  Expect<Equal<AnotherType, AnotherExpectedType>>
];
```

### 📝 문제-해결 구조

각 문제는 `example.ts`와 `solution.ts`로 구성되어 있어 단계별 학습이 가능합니다.

### 🔧 실전 유틸리티

- **브랜드 타입**: 타입 안전성을 위한 고유 식별자
- **타입 가드**: 런타임 타입 검증
- **외부 라이브러리 타입 정의**: 실제 프로젝트에서 사용할 수 있는 패턴

## 🎓 학습 효과

이 프로젝트를 통해 다음과 같은 TypeScript 고급 기법을 습득할 수 있습니다:

- ✅ 복잡한 타입 변환과 조작
- ✅ 제네릭을 활용한 재사용 가능한 타입 시스템
- ✅ 런타임과 컴파일타임 타입 안전성 확보
- ✅ 외부 라이브러리와의 타입 호환성
- ✅ 최신 TypeScript 기능 활용

_이 프로젝트는 [실전 연습으로 익히는 고급 타입스크립트 기술](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84%EC%97%B0%EC%8A%B5-%EA%B3%A0%EA%B8%89-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8) 강의에서 제공된 문제들을 기반으로 구성된 학습 레포지토리입니다._
