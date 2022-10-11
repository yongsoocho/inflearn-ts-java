package chap6;

public class Test {
  public static void main(String[] args) {
    
    Cls cls = new Cls(5);
    Cls cls2 = new Cls(5);

    Object o = new Object();
    
    System.out.println(cls.equals(cls2));

  }
}
