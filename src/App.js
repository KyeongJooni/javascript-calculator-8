import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 빈 문자열 처리
    if (input.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    const { delimiter, str } = this.parseDelimiter(input);
    const numbers = str.split(delimiter);
    const sum = this.calculate(numbers);

    Console.print(`결과 : ${sum}`);
  }

  // 커스텀 구분자
  parseDelimiter(input) {
    if (input.startsWith("//")) {
      const parts = input.split("\\n");
      const delim = parts[0].substring(2);
      return {
        delimiter: new RegExp(`[,:${delim}]`),
        str: parts[1]
      };
    }
    return {
      delimiter: /[,:]/,
      str: input
    };
  }

  // 유효성 검증
  validateNumber(num) {
    if (isNaN(num) || num.trim() === "") {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    const n = Number(num);
    if (n < 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
    if (!Number.isInteger(n)) {
      throw new Error("[ERROR] 정수만 입력할 수 있습니다.");
    }
  }

  //합 계산
  calculate(numbers) {
    numbers.forEach(num => this.validateNumber(num));
    return numbers.reduce((acc, num) => acc + Number(num), 0);
  }
}

export default App;
