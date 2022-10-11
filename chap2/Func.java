package chap2;

public class Func {
  // 3. 1번에서 명세한 interface 를 type 으로 쓴다.
  public static void main(String[] args) {
    IOper op = new SuperOper();

    System.out.println(op.add(1, 2));
    System.out.println(op.minus(1, 2));
  }
}
