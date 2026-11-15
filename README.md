# Problem Solving with TypeScript & OOP

**Batch 8 · Module 4 · Assignment-1**

Solutions to 8 TypeScript problem-solving tasks and 2 technical blog posts, covering Modules 1, 2 and 3.

## Overview

This assignment practices core TypeScript concepts through small, focused problems. All functions and class methods have explicit parameter and return types, and `any` is not used anywhere.

**Concepts covered**

- Basic types and optional parameters
- Union types and type narrowing (`typeof`)
- Readonly tuples
- Generics, rest parameters and `keyof` constraints
- Interfaces
- OOP: classes, inheritance and access modifiers (`protected`, `private`)
- Promises and asynchronous programming

## Project Structure

| File | Description |
|------|-------------|
| `solutions.ts` | Solutions to all 8 problems |
| `any-unknown-never.md` | Blog: `any`, `unknown` and `never` in TypeScript |
| `type-narrowing.md` | Blog: Type Narrowing in TypeScript |
| `README.md` | Project overview |

## Problems Solved

| # | Name | Concept |
|---|------|---------|
| 1 | `multiplyValue` | Optional parameter, handling `0` correctly |
| 2 | `processInput` | Union types, `typeof` narrowing |
| 3 | `formatCoordinate` | Readonly tuple, destructuring |
| 4 | `concatenateArrays` | Generics, rest parameters |
| 5 | `Course`, `getPopularCourses` | Interface, non-mutating `filter` |
| 6 | `pluckValues` | Generics with `keyof` |
| 7 | `Employee`, `Manager` | Inheritance, access modifiers |
| 8 | `validateAgeAsync` | `Promise<string>`, `setTimeout`, `Error` rejection |

## Blog Posts

1. [Understanding any, unknown, and never in TypeScript](./any-unknown-never.md)
2. [Understanding Type Narrowing in TypeScript](./type-narrowing.md)

## Getting Started

**Prerequisite:** Node.js

```bash
git clone https://github.com/WebdeveloperNahid/typescript_problem-solving_assignment-1.git
cd typescript_problem-solving_assignment-1
npx tsc --noEmit solutions.ts
```

`solutions.ts` only exports logic (no `console.log`), so it prints nothing. The `tsc` command confirms there are no type errors.

## Author

**Omar Faruk Nahid**
[GitHub](https://github.com/WebdeveloperNahid) · [LinkedIn](https://linkedin.com/in/omarfaruk-nahid)