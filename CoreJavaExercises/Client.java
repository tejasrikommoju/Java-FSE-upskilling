// File: Client.java
import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 1234;

        try (Socket socket = new Socket(host, port)) {
            System.out.println("Connected to server.");

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            String message;
            while (true) {
                System.out.print("You: ");
                message = consoleInput.readLine();
                output.println(message);

                String response = input.readLine();
                System.out.println("Server: " + response);
            }

        } catch (IOException e) {
            System.out.println("Client error: " + e.getMessage());
        }
    }
}