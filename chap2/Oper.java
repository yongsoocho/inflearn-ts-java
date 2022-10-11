package chap2;

// v1 version1

// 2. 1번 interface를 implements 한 class 구현
public class Oper implements IOper {
  @Override
  public int add(int a, int b) {
    return a + b;
  }

  @Override
  public int minus(int a, int b) {
    return a - b;
  }
}
