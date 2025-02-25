package singleton;

public class ex01 {

    static class DatabaseConnection {
        private static DatabaseConnection instance;

        // กำหนด private constructor
        private DatabaseConnection() {}

        // Method สำหรับคืนค่า instance เดียวกันเสมอ
        public static synchronized DatabaseConnection getInstance() {
            if (instance == null) {
                instance = new DatabaseConnection();
            }
            return instance;
        }

        public void connect() {
            System.out.println("Connected to the database.");
        }
    }

    public static void main(String[] args) {
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        DatabaseConnection db2 = DatabaseConnection.getInstance();

        db1.connect();

        System.out.println("db1 == db2 ? " + (db1 == db2)); // ควรเป็น true
    }
}
