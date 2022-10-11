// 1. interface 명세
interface IOper {
  add(a: number, b: number): number;

  minus(a: number, b: number): number;
}

// 2. 1번 interface를 implements 한 class 구현
class Oper implements IOper {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }
}

// 3. 1번에서 명세한 interface 를 type 으로 쓴다.
const op: IOper = new Oper();

console.log(op.add(1, 2));
console.log(op.minus(1, 2));
