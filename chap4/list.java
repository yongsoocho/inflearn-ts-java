package chap4;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class list {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4};

    List<Integer> list__ = new ArrayList<Integer>();
    list__.add(1);
    List<Integer> list___ = new LinkedList<Integer>();
    List<Integer> list = List.of(1, 2, 3, 4);
    List<Integer> list_ = Arrays.asList(1, 2, 3, 4);

    System.out.println(arr);
    System.out.println(list);
    System.out.println(list_);
  }
}
