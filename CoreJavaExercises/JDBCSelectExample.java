import java.sql.*;

public class JDBCSelectExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db"; 
        String query = "SELECT * FROM students";

        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            System.out.println("Connected to SQLite and reading students table:");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int grade = rs.getInt("grade");

                System.out.println("ID: " + id + ", Name: " + name + ", Grade: " + grade);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}