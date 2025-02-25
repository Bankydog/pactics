package singleton;

public class ex01 {

    static class DatabaseConnection implements Cloneable {
        private static DatabaseConnection instance;
        private static int connectionCount = 0; // นับจำนวนครั้งที่เรียก getInstance()

        // Private constructor
        private DatabaseConnection() {}

        // ใช้ synchronized block แทน synchronized method
        public static DatabaseConnection getInstance() {
            if (instance == null) {
                synchronized (DatabaseConnection.class) {
                    if (instance == null) {
                        instance = new DatabaseConnection();
                    }
                }
            }
            connectionCount++;
            System.out.println("getInstance() called: " + connectionCount + " times");
            return instance;
        }

        public void connect() {
            System.out.println("Connected to the database.");
        }

        public void disconnect() {
            System.out.println("Disconnected from the database.");
        }

        // ป้องกันการ clone
        @Override
        protected Object clone() throws CloneNotSupportedException {
            throw new CloneNotSupportedException("Cloning of DatabaseConnection is not allowed.");
        }
    }

    public static void main(String[] args) {
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        DatabaseConnection db2 = DatabaseConnection.getInstance();

        db1.connect();
        System.out.println("db1 == db2 ? " + (db1 == db2)); // ควรเป็น true

        db1.disconnect();

        // ลอง clone (จะเกิดข้อผิดพลาด)
        try {
            DatabaseConnection dbClone = (DatabaseConnection) db1.clone();
        } catch (CloneNotSupportedException e) {
            System.out.println(e.getMessage());
        }
    }
}
