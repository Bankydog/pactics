package LambdaExpression;

import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ex01 {
    public static void main(String[] args) {
        // Lambda Expression สำหรับคำนวณกำลังสอง
        Function<Integer, Integer> squareFunction = x -> x * x;
        Predicate<Integer> isEven = x -> x % 2 == 0;
        Function<String, String> reverseString = x -> new StringBuilder(x).reverse().toString();
        Function<List<Integer>, List<Integer>> filterEvenNumbers = list -> list.stream().filter(isEven).collect(Collectors.toList());
        BiFunction<Integer, Integer, Integer> multiply = (a, b) -> a * b;

        // ทดสอบใช้งาน
        System.out.println("Square of 5: " + squareFunction.apply(5));
        System.out.println("Square of 10: " + squareFunction.apply(10));
        System.out.println("10 is Even ? : " + isEven.test(10));
        System.out.println("10 is Even ? : " + isEven.test(7));
        System.out.println("reverse of : " + reverseString.apply("hello"));
        System.out.println("reverse of : " + reverseString.apply("live"));
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8);
        System.out.println("Even are : " + filterEvenNumbers.apply(numbers));
        System.out.println("5 * 3 = " + multiply.apply(5, 3));
    }
}
