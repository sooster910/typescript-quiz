# Advanced TypeScript Quiz & Learning Repository

> TypeScript의 고급 타입 시스템과 제네릭을 활용한 실전 문제 해결 능력 위한 프로젝트

## 📋 학습 개요 및 목표

타입시스템을 통해 더 안전하고 확장가능한 코드 설계 능력을 위해 개인적으로 매일 커밋하는 학습 레포입니다. 

[실전 연습으로 익히는 고급 타입스크립트 기술](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84%EC%97%B0%EC%8A%B5-%EA%B3%A0%EA%B8%89-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8) 강의에서 제공된 문제들을 기반으로 구성된 학습 레포지토리입니다.

## 📚 학습구조

```
src/
├── chapter1-type-tranformation/    # 타입 변환 기법
├── chapter2-generic/               # 제네릭
├── chapter3-advanced-pattern/      # 고급 패턴
```

## 학습진행 상황
### Chapter 1: Type Transformation

- [x]  **기본 타입 변환**: `keyof`, `typeof`, 인덱스 접근
- [x] **함수 타입**: 반환 타입, 매개변수 타입, Promise 타입
- [x] **유니온 타입**: 구별된 유니온, `Extract`, `Exclude` 유틸리티
- [x] **인덱싱**: 인덱스 접근, `as const`, 객체 값 추출
- [x] **템플릿 리터럴**: 문자열 패턴, `Uppercase` 등 문자열 조작
- [x] **키 리매핑**: 유니온을 객체로 변환, 객체를 튜플로 변환

### Chapter 2: Generics

- [x] **기본 제네릭**: 타입 매개변수, 제약 조건
- [x] **조건부 타입**: `extends`를 활용한 타입 분기, infer
- [ ] **타입 인수**: 함수 오버로드와 제네릭
- [ ] **고급 제네릭**: 재귀적 타입, 복잡한 타입 조합
- [ ] **함수 오버로드**: 다양한 시그니처 처리

### Chapter 3: Advanced Patterns

- [ ] **브랜드 타입**: 타입 안전성을 위한 브랜딩
- [ ] **글로벌 타입**: 전역 타입 확장
- [ ] **타입 가드 & 어설션 함수**: 런타임 타입 검증
- [ ] **클래스**: 고급 클래스 패턴
- [ ] **외부 라이브러리**: 타입 정의와 확장
- [ ] **식별 함수**: 타입 추론 개선

## 📈주요 학습 내용

### Chapter 2.Generic

#### [코드에 의도를 담아내기: TypeScript @ts-expect-error 침묵보단 터트림으로 ](./src/chapter2-generic/01-generic-basic/ts-ignore-and-expect-error.md)
#### [특정 키이름 패턴식별해 원하는 키:밸류 추출](./src/chapter2-generic/02-conditional-type/conditionalType.md)
#### [[WIP 작성중] infer 타입 그리고 사용되는 never 어떻게 이해할 것인가?](./src/chapter2-generic/02-conditional-type/infer-never.md)

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 🎓 학습 효과

이 프로젝트를 통해 다음과 같은 TypeScript 고급 기법을 습득할 수 있습니다:

- ✅ 복잡한 타입 변환과 조작
- ✅ 제네릭을 활용한 재사용 가능한 타입 시스템
- ✅ 런타임과 컴파일타임 타입 안전성 확보
- ✅ 외부 라이브러리와의 타입 호환성

_이 프로젝트는 [실전 연습으로 익히는 고급 타입스크립트 기술](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84%EC%97%B0%EC%8A%B5-%EA%B3%A0%EA%B8%89-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8) 강의에서 제공된 문제들을 기반으로 구성된 학습 레포지토리입니다._
