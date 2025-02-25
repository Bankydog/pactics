package Thread;

public class ex01 {
    static class MyTask implements Runnable {
        @Override
        public void run() {
            System.out.println("Task is running");
        }
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new MyTask());
        thread.start();
    }
}

//สร้าง Thread ด้วย Runnable
