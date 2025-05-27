public class MethodOverloading {

    // Method with two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Method with two doubles
    public double add(double a, double b) {
        return a + b;
    }

    // Method with three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        MethodOverloading obj = new MethodOverloading();

        int sum1 = obj.add(5, 10);
        double sum2 = obj.add(3.5, 2.5);
        int sum3 = obj.add(1, 2, 3);

        System.out.println("Sum of two integers: " + sum1);
        System.out.println("Sum of two doubles: " + sum2);
        System.out.println("Sum of three integers: " + sum3);
    }
}