// 用户输入任意数值
// 点击按钮后，程序自动“矫正”输入：小于 1 → 输出 1，超过 10 → 输出 10
// 并在页面上显示结果

const buttonFix = document.getElementById("btnFixNumber");
const buttonReset = document.getElementById("btnReset");
const output = document.getElementById("output");
const input = document.getElementById("numInput");

const fixInput = function fixInput() {
  const inputValue = Number(input.value);
  //   const fixed = inputValue < 1 ? 1 : inputValue > 10 ? 10 : inputValue;
  const fixed = Math.min(Math.max(inputValue, 1), 10);
  return fixed;
};

buttonFix.addEventListener("click", () => {
  const result = fixInput();
  output.textContent = `Result is ${result}`;
});

buttonReset.addEventListener("click", () => {
  output.textContent = "";
  input.value = "";
});

/*
❌ 类型错误	input.value 是 string，和 number 比较会出错	用 +input.value 或 Number(input.value) 强制转数值
❌ 函数未初始化错误（hoist）	Cannot access 'fixInput' before initialization	将函数定义提前，或用函数声明 function fixInput() {}
❌ 未定义变量	ReferenceError: button is not defined	无意义残留代码 button; 应删除
❌ 按钮点击无反应	因为 fixInput() 返回的结果有误，或逻辑被跳过	修正值类型，逻辑判断成立即可
*/
