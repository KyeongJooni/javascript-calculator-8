import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (input === "") {
      Console.print("결과 : 0");
      return;
    }

    let delimiter = /[,:]/;
    let numberString = input;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\\n");
      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiter = new RegExp(`[,:${customDelimiter}]`);
      numberString = input.substring(delimiterEndIndex + 2);
    }

    const numbers = numberString.split(delimiter);
    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
