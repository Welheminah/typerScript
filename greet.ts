import Person from './person';
// export function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName}, ${lastName}`;
//   }

export default function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} we will be in touch at: ${person.email}`;
  }

// const message = greet("Bob", "Crow");
// console.log(message);