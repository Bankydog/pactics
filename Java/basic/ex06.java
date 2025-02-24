public class ex06 {

    public interface Shape {
        double calculateArea();
    }

    public static class Rectangle implements Shape {
        private final double width;
        private final double height;

        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }

        @Override
        public double calculateArea() {
            return this.width * this.height;
        }
    }

    public static class Circle implements Shape {
        private final double radius;
        private double PI = 3.14;

        public Circle(double radius, double PI) {
            this.radius = radius;
            this.PI = PI;
        }

        @Override
        public double calculateArea() {
            return this.PI * this.radius * this.radius;
        }
    }

    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(10, 20);
        Circle circle = new Circle(10, 3.14);
        System.out.println("result of Rectangle is : " + rectangle.calculateArea());
        System.out.println("result of Circle is : " + circle.calculateArea());
    }
}