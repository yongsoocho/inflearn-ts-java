package chap3;

public class generic<T> {

  private T name;

  public void setName(T name) {
    this.name = name;
  }

  public T getName() {
    return name;
  }

  public <E> E gene(E p) {
    return p;
  }

  public static void main(String[] args) {
    generic Gene = new generic<String>();

    Gene.setName("yongsoo");
    System.out.println(Gene.getName().getClass());
    System.out.println(Gene.gene(2022).getClass());
  }

}
