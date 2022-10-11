// lombok

// 1. toString x
// 2. field var
// 3. 생성자 1개
// 4. getter setter

class Cls {
  private _age: number;
  private _name: string;
  public address: string | undefined;

  constructor(age: number, name: string, address?: string) {
    this._age = age;
    this._name = name;
    this.address = address;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age >= 0 ? age : 0;
  }
}

// class Cls {
//   constructor(public age: number, public name: string) {}
// }

const cls = new Cls(25, "yongsoo");
cls.age = 25;
console.log(cls.age);
