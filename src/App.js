import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input === "") {
      Console.print("결과 : 0");
      return;
    }

    const numbers = input.split(/[,:]/);
    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
