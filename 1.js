function Far(cel) {
   f = (9/5)*cel+32;

   alert(`Цельсий ${cel}, Фаренгейт ${f.toFixed(2)}`);
}
const cel = Number.parseFloat(prompt('Введите температуру в градусах Цельсия'));
Far(cel);