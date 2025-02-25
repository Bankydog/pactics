package haspMap;

import java.util.HashMap;

public class ex08 {
    public static void main(String[] args) {
        // ข้อความที่ต้องการนับคำ
        String text = "hello world hello java world hello";

        // เรียกใช้ฟังก์ชันเพื่อหาคำและนับจำนวนครั้ง
        HashMap<String, Integer> wordCount = countWords(text);

        // พิมพ์คำและจำนวนครั้ง
        for (String word : wordCount.keySet()) {
            System.out.println(word + ": " + wordCount.get(word));
        }
    }

    public static HashMap<String, Integer> countWords(String text) {
        // สร้าง HashMap เพื่อเก็บคำและจำนวนครั้ง
        HashMap<String, Integer> wordCount = new HashMap<>();

        // แยกข้อความออกเป็นคำโดยใช้ split
        String[] words = text.split(" ");

        // วนลูปเพื่อคำนวณจำนวนครั้งที่คำปรากฏ
        for (String word : words) {
            // แปลงคำเป็น lowercase เพื่อไม่ให้คำที่มีตัวพิมพ์ใหญ่และเล็กนับแยก
            word = word.toLowerCase().replaceAll("[^a-zA-Z0-9]", ""); // เอาเครื่องหมายพิเศษออก

            // ตรวจสอบว่าคำนี้มีใน HashMap หรือยัง
            if (wordCount.containsKey(word)) {
                // ถ้ามีให้เพิ่มค่าจำนวนขึ้น 1
                wordCount.put(word, wordCount.get(word) + 1);
            } else {
                // ถ้ายังไม่มีให้เพิ่มคำนี้ใน HashMap และตั้งค่าเป็น 1
                wordCount.put(word, 1);
            }
        }

        return wordCount;
    }
}
