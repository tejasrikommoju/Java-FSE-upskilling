public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;      // 5 * 2 = 10; 10 + 10 = 20
        int result2 = (10 + 5) * 2;    // 10 + 5 = 15; 15 * 2 = 30
        int result3 = 100 / 5 + 2 * 3; // 100 / 5 = 20; 2 * 3 = 6; 20 + 6 = 26

        System.out.println("Result 1: " + result1); // Output: 20
        System.out.println("Result 2: " + result2); // Output: 30
        System.out.println("Result 3: " + result3); // Output: 26
    }
}