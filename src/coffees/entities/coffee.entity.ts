// TypeScript treats a class as both value and type.
// This implicit type declared by TypeScript describes the shape of the instance a class produces.
// Therefore when a class is used as a type, such as using let value :Class annotation,
// TypeScript checks if the value has all the public properties of the Class.

export class Coffee {
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}

// export interface Coffee {
//   id: string;
//   name: string;
//   brand: string;
//   flavors: string[];
// }

// export type Coffee = {
//   id: string;
//   name: string;
//   brand: string;
//   flavors: string[];
// };
