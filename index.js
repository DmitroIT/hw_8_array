let ques = prompt("Введите что-нибудь через запятую");
console.log(ques);

switch (true) {
  case ques === null:
    alert("Вы отменили");
    break;

  case ques === "":
    alert("Вы оставили поле пустым");
    break;

  default:
    console.log(`Вы ввели следующие данные: \n ${ques}`);

    let arr = ques.split(",");

    let sortArr = arr.sort((a, b) => a - b);
    console.log(`Отсортированный по возрастанию: \n ${sortArr}`);

    let arrSplice = sortArr.splice(1, 3);
    console.log(`Удалил 2-4 включительно и вывел обновленные данные: \n ${sortArr}`);

    break;
}
