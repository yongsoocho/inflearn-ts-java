package chap2;

// v3 version3

// 2. 1번 interface를 implements 한 class 구현
public class SuperOper implements IOper {
  @Override
  public int add(int a, int b) {
    return a + a + a + a + b;
  }

  @Override
  public int minus(int a, int b) {
    return a - b - b - b - b;
  }
}
