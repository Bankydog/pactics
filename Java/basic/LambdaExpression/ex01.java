package LambdaExpression;

import java.util.function.Function;

public class ex01 {
    public static void main(String[] args) {
        // Lambda Expression สำหรับคำนวณกำลังสอง
        Function<Integer, Integer> squareFunction = x -> x * x;

        // ทดสอบใช้งาน
        System.out.println("Square of 5: " + squareFunction.apply(5));
        System.out.println("Square of 10: " + squareFunction.apply(10));
    }
}
