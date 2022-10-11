package chap5;

import java.util.HashMap;
import java.util.Map;

public class map {
  public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<>();

    map.put("value", 25);
    map.put("value", 100);

    System.out.println(map.get("value"));
  }
}
