let age: number = 20;

if (age < 50) {
  age += 5;
}

console.log(age);

////build in types
let sales = 123_456_780;
let course = "Typescript";
let is_published = true;

let level;

//you can make "noImplicitAny": false so you dont need to set type any
function render(document: any) {
  console.log(document);
}
render("dummy render");

//arrays
let numberAutoInfer = [1, 2, 3, 4]; //dont need to set the type
let numbers: number[] = [];
numbers.forEach((n) => n.toExponential); //can see all properties and methods for type number

//tuples
let user: [number, string] = [3, "sup"];

console.log(user[0].toExponential(2));
console.log(user[1].charAt(0));

//enum PascalCase
enum Size {
  Small,
  Medium,
  Large,
}
let mySize: Size = Size.Large;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear = 1999): number {
  if (taxYear < 2020) {
    return income * 23;
  }

  return 1904;
}

console.log(calculateTax(123, 2023));
console.log(calculateTax(123));

//Objects
let employee: {
  readonly id: number;
  name: string;
  age: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Tonho Badajoz",
  age: 18,
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.retire(new Date());

//Type Alias
type Employee = {
  readonly id: number;
  name: string;
  age: number;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "Tonho Badajoz",
  age: 18,
  retire: (date: Date) => {
    console.log(date);
  },
};

employee2.retire(new Date("2023-2-23"));

//Union Types
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.5;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => console.log("drag e tal"),
  resize: () => console.log("resize e tal"),
};

//Literal Type
type Quantity = 50 | 100;
let quantity: Quantity = 50; //it can only be 50 or 100

type Metric = "cm" | "m";

//Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Boda!");
  }
}

greet(null);

//Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday)

let customer2 = getCustomer(2);
console.log(customer2?.birthday?.getFullYear)

//optional call
let log: any = null;
log?.('a');

