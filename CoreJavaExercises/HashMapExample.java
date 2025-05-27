import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            System.out.print("Enter ID: ");
            int id = scanner.nextInt();
            if (id == -1) break;
            scanner.nextLine(); // consume newline
            System.out.print("Enter Name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        System.out.print("\nEnter ID to retrieve student name: ");
        int searchId = scanner.nextInt();
        if (studentMap.containsKey(searchId)) {
            System.out.println("Name: " + studentMap.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        scanner.close();
    }
}