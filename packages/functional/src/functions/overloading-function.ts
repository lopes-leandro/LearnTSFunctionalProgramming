function test(name: string): string;
function test(age: number): string;
function test(single: boolean): string;
function test(value: string | number | boolean): string {
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
