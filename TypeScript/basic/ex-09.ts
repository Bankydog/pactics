interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

class FetchData<Joke> {
  apiURL: string = "https://official-joke-api.appspot.com/random_joke";

  fetchData(): Promise<Joke> {
    return fetch(this.apiURL).then((response) =>
      response.json()
    ) as Promise<Joke>;
  }
}

// ✅ ต้องระบุประเภทของ Generic <Joke>
const dataFormURL = new FetchData<Joke>();

// ✅ ใช้ `.then()` หรือ `await` เพื่อดึงค่าจาก Promise
dataFormURL.fetchData().then((data) => {
  console.log("Joke:", data.setup);
  console.log("Punchline:", data.punchline);
  console.log("Type:", data.type);
  console.log("ID:", data.id);
});
