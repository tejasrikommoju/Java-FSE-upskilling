import java.util.*;
import java.util.stream.Collectors;

public class StreamEvenFilter {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(3, 8, 2, 7, 6, 10, 15);

        List<Integer> evens = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());

        System.out.println("Even Numbers: " + evens);
    }
}