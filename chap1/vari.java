package chap1;

public class vari {
  public static void main(String[] args) {
    // int a = 1;
    // boolean b = true;
    // double c = 3.14;

    // Wrapper 클래스 -> Collections (객체를 담아야 한다.)

    Integer a = 1;
    Boolean b = true;
    Double c = 3.14;

    System.out.println(a.getClass());
    System.out.println(b);
    System.out.println(c.longValue());
  }
}
