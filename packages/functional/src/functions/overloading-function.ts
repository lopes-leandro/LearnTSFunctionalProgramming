export function tests(name: string): string;
export function tests(age: number): string;
export function tests(single: boolean): string;
export function tests(value: string | number | boolean): string {
  switch (typeof value) {
    case "string":
      return `My name is ${value}.`;
    case "number":
      return `I'm ${value} years old.`;
    case "boolean":
      return value ? `I'm single.` : `I'm not single.`;
    default:
      throw new Error("Invalid Operation!");
  }
}

export const sum = (a: number, b: number): number => {
  return a + b;
};

export const sub = (a: number, b: number): number => {
  return a - b;
}

export const mult = (a: number, b: number): number => {
  return a * b;
}

export const div = (a: number, b: number): number => {
  return a % b;
}
