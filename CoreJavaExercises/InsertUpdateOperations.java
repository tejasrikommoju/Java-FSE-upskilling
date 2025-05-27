import java.sql.*;

public class InsertUpdateOperations {
    private final String url = "jdbc:sqlite:students.db";

    public void insertStudent(String name, int grade) {
        String sql = "INSERT INTO students(name, grade) VALUES(?, ?)";

        try (Connection conn = DriverManager.getConnection(url);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, name);
            pstmt.setInt(2, grade);
            pstmt.executeUpdate();
            System.out.println("Student inserted successfully.");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateStudentGrade(int id, int newGrade) {
        String sql = "UPDATE students SET grade = ? WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(url);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setInt(1, newGrade);
            pstmt.setInt(2, id);
            int rows = pstmt.executeUpdate();
            if (rows > 0) {
                System.out.println("Student updated successfully.");
            } else {
                System.out.println("No student found with ID: " + id);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}