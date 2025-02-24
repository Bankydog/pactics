"use strict";
class FetchData {
    constructor() {
        this.apiURL = "https://official-joke-api.appspot.com/random_joke";
    }
    fetchData() {
        return fetch(this.apiURL).then((response) => response.json());
    }
}
// ✅ ต้องระบุประเภทของ Generic <Joke>
const dataFormURL = new FetchData();
// ✅ ใช้ `.then()` หรือ `await` เพื่อดึงค่าจาก Promise
dataFormURL.fetchData().then((data) => {
    console.log("Joke:", data.setup);
    console.log("Punchline:", data.punchline);
    console.log("Type:", data.type);
    console.log("ID:", data.id);
});
