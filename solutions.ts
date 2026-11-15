function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    const output = value.trim().toLowerCase();
    return output;
  } else if (typeof value === "number") {
    const output = value * 10;
    return output;
  } else {
    return value ? "Active" : "Inactive";
  }
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location : ${locationName} ( ${latitude} , ${longitude} )`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const newArray = courses.filter(
    (course: Course): boolean =>
      course.isPublished === true && course.students >= minStudents,
  );
  return newArray;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



const validateAgeAsync = async (age: number): Promise<string> => { 
  return new Promise<string> ((resolve,reject): void => {
    if (age < 18) {
      reject(new Error ("Access Denied: Must be 18 or older"));
    }else{
      setTimeout(():void => {
        resolve ("Access Granted");
      },1000);
    }
  });
};


async function runTest(): Promise<void> {
  console.log(await validateAgeAsync(20));
  try {
    await validateAgeAsync(15);
  } catch (error) {
    console.log(error);
  }
}

runTest();