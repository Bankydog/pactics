import java.util.HashMap;
import java.util.Map;

public class ex07 {
    public static void main(String[] args) {
        // สร้าง HashMap ที่เก็บชื่อและคะแนน
        HashMap<String, Integer> studentScores = new HashMap<>();

        // เพิ่มข้อมูลนักเรียน 5 คน
        studentScores.put("Bank", 85);
        studentScores.put("Bow", 90);
        studentScores.put("Belle", 75);
        studentScores.put("Boom", 95);
        studentScores.put("Bento", 80);

        // คำนวณค่าเฉลี่ยคะแนน
        double averageScore = calculateAverageScore(studentScores);

        // พิมพ์ผลค่าเฉลี่ยคะแนน
        System.out.println("Average Score: " + averageScore);
    }

    // เมธอดคำนวณค่าเฉลี่ยคะแนน
    public static double calculateAverageScore(Map<String, Integer> studentScores) {
        int totalScore = 0;
        int numberOfStudents = studentScores.size();

        // รวบรวมคะแนนทั้งหมด
        for (Integer score : studentScores.values()) {
            totalScore += score;
        }

        // คำนวณค่าเฉลี่ย
        return (double) totalScore / numberOfStudents;
    }
}
