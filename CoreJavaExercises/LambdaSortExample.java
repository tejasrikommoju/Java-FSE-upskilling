import java.util.*;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Zara", "Amit", "John", "Bella");

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted Names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}