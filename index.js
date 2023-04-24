//Спрашиваем длину массива
let leng = prompt('Введите число от 5 до 10')

const arr = []

if (isNaN(leng)) {
  alert("Это должна быть цифра")
} else if (leng === '') {
  alert("Поле не может быть пустым")
} else if (leng === null) {
  alert('Поле не может быть пустым')
} else if (+leng < 5 || +leng > 10) {
  alert('Число должно от 5 до 10')
} else {
  for (let i = 0; i < leng; i++) {
    let elem = prompt(`Введите число ${i + 1}`)
    if (elem === '' || Number.isNaN(+elem) || elem === null) {
      alert('Не корректные данные')
    } else {
    arr.push(+elem)
  } 
  } alert(arr)

  //Сортируем массив
  let sortArr = arr.sort((a, b) => a - b)
  alert(`Отсортированные числа по возрастанию \n ${sortArr}`)

  //Режем массив
  let spliceArr = sortArr.splice(1, 3)
  alert(`Удаляю элементы 2-4 и вывожу результат \n ${sortArr}`)
}
