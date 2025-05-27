import java.lang.reflect.Method;

// Non-public class Person (default access)
class Person {
    public void sayHello() {
        System.out.println("Hello from Person");
    }

    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        // Load the Person class dynamically
        Class<?> clazz = Class.forName("Person");

        // Create an instance of Person
        Object person = clazz.getDeclaredConstructor().newInstance();

        // Print method names and parameter count
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("Method: " + method.getName());
            System.out.println("Parameter count: " + method.getParameterCount());
        }

        // Invoke methods dynamically
        Method sayHello = clazz.getMethod("sayHello");
        sayHello.invoke(person);

        Method greet = clazz.getMethod("greet", String.class);
        greet.invoke(person, "Tejasvi");
    }
}