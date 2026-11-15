# Understanding Type Narrowing in TypeScript

## Introduction

When I started learning TypeScript, I learned that a variable can have more than one possible type. At first, I found it a little confusing how to handle different types in the same function. Later, I learned about Type Narrowing. It helps us check the actual type of a value and perform operations based on that type.

## Understanding Type Narrowing

Type Narrowing means making a variable's type more specific by using conditions. TypeScript provides different ways to do this, such as `typeof`, `instanceof`, and the `in` operator.

The `typeof` operator is used to check basic types like string, number, and boolean.

For example:

```ts
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}
```

Here, TypeScript understands that value is a string in the first condition and a number in the else block.

We can also use `instanceof` to check whether an object belongs to a particular class.

```ts
class User {
  name = "Omarfaruk";
}

const user = new User();

if (user instanceof User) {
  console.log(user.name);
}
```

Another useful way is the `in` operator. It checks whether a property exists in an object.

```ts
function showInfo(person: { name: string } | { age: number }) {
  if ("name" in person) {
    console.log(person.name);
  } else {
    console.log(person.age);
  }
}
```

## Conclusion

In my understanding, Type Narrowing makes TypeScript code safer and easier to understand. It helps us work with different data types without getting unexpected errors. I think it is very useful when handling user input, objects, and API data.
