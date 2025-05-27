
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpExample {
    public static void main(String[] args) {
       
        HttpClient client = HttpClient.newHttpClient();

       
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/")) 
                .GET()
                .build();

        
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

          
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body:");
            System.out.println(response.body());

        } catch (IOException | InterruptedException e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
    }
}