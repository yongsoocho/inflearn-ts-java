// number boolean string any

interface IHi {
  hi: string;
}

class Hi {
  // hi는 null 이면 안되고, 3글자 이상이여야하고.. 등등
  hi: string;
}

let a: Hi = {
  hi: "bye",
};

console.log(a.hi);
