// java-bean 규약
// 1번
package chap6;

public class Cls extends Clsp {
  // 2
  private Integer age;

  // 3
  public Cls() {}
  public Cls(Integer age) {
    this.age = age;
  }

  // 4 무결성
  public Integer getAge() {
    return this.age;
  }
  // 키 속력 자판기 1~30 50
  public void setAge(Integer age) {
    if (age >= 0) {
      this.age = age;
    } else {
      this.age = 0;
    }
  }

  @Override
  public String toString() {
    return "{ age : " + this.age + " }";
  }

  @Override
  public int hashCode() {
    final Integer constant = 31;
    return constant * this.age;
  }

  @Override
  public boolean equals(Object o) {
    Cls newCls = (Cls) o;

    if (newCls.getAge() == this.age) {
      return true;
    }

    return false;
  }
}
