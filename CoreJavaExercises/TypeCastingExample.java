public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 45.78;
        int myInt = (int) myDouble;  // Explicit casting

        int anotherInt = 50;
        double anotherDouble = anotherInt;  // Implicit casting

        System.out.println("Original double: " + myDouble);
        System.out.println("Double to int: " + myInt);
        System.out.println("Original int: " + anotherInt);
        System.out.println("Int to double: " + anotherDouble);
    }
}