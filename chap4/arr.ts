const arr: number[] = [1, 2, 3, 4];

interface ILang {
  name: string;
  rating: number;
}

const langs: ILang[] = [
  {
    name: "c",
    rating: 5,
  },
  {
    name: "java",
    rating: 3,
  },
  {
    name: "go",
    rating: 1,
  },
];

const test = new Array(10);
const b = "";

// ILang , ILang[]
console.log(Array.isArray(b));
