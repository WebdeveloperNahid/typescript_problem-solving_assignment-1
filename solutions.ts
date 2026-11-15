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
function getPopularCourses(courses: Course[],minStudents: number):Course[] {
    const newArray = courses.filter((course: Course): boolean => course.isPublished ===true && course.students >= minStudents)
    return newArray;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}