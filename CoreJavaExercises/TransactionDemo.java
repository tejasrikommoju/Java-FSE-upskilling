import java.sql.*;

public class TransactionDemo {
    private static final String DB_URL = "jdbc:sqlite:students.db";

    public static void transferMoney(int fromAccountId, int toAccountId, double amount) {
        try (Connection conn = DriverManager.getConnection(DB_URL)) {
            conn.setAutoCommit(false);  // Start transaction

            // Debit from sender
            String debitSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            try (PreparedStatement debitStmt = conn.prepareStatement(debitSql)) {
                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccountId);
                debitStmt.executeUpdate();
            }

            // Credit to receiver
            String creditSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            try (PreparedStatement creditStmt = conn.prepareStatement(creditSql)) {
                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccountId);
                creditStmt.executeUpdate();
            }

            conn.commit();  // Commit if both succeed
            System.out.println("Transfer successful!");

        } catch (SQLException e) {
            e.printStackTrace();
            try {
                Connection conn = DriverManager.getConnection(DB_URL);
                conn.rollback();  // Rollback on error
                System.out.println("Transfer failed. Rolled back transaction.");
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        transferMoney(1, 2, 200);  // Transfer 200 from Alice to Bob
    }
}