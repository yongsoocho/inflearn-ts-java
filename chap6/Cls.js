// lombok
// 1. toString x
// 2. field var
// 3. 생성자 1개
// 4. getter setter
class Cls {
    constructor(age, name, address) {
        this._age = age;
        this._name = name;
        this.address = address;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age >= 0 ? age : 0;
    }
}
// class Cls {
//   constructor(public age: number, public name: string) {}
// }
const cls = new Cls(25, "yongsoo");
cls.age = 25;
console.log(cls.age);
