import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input === "") {
      Console.print("결과 : 0");
      return;
    }

    let delimiter = /[,:]/;
    let str = input;

    if (input.startsWith("//")) {
      const parts = input.split("\\n");
      const delim = parts[0].substring(2);
      delimiter = new RegExp(`[,:${delim}]`);
      str = parts[1];
    }

    const numbers = str.split(delimiter);

    numbers.forEach(num => {
      if (isNaN(num) || num.trim() === "") {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
      }
      if (Number(num) < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    });

    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
