// Базовый уровень:
// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
// function sumN(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(sumN(4));

// 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект университета, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию вывода на экран всю информацию о студенте

// const student = {
//     name: 'Vuki',
//     surname: 'Solo',
//     male: 'famale',
//     contacts: {
//         tel: 48575280859,
//         email: 'vuki.solo@email.com',
//         adress: {
//             city: 'ZP',
//             country: 'Ukraine',
//             street:{
//                 nameStreet: 'zadniprovska',
//                 house: 64,
//             }
//         }
//     }
// };
// const university = {
//     nameUniversity: 'ZNU',
//     facultyUniversity: 'Programing'
// };
// student.university = university;

// function infoOfStudent(stud){

//     for(let [key, value] of Object.entries(stud)){
//         typeof value === 'object' ? infoOfStudent(value) : console.log(`${key}: ${value}`);
//     };
// }
// infoOfStudent(student)

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.2 Вывести элементы с четными индексами (четные числа делятся на 2 без остатка)
// 3.3 Вывести только четные элементы 
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

// const arr = []

// for(let i = 1; i < 25; i++){
//     if(i % 9 === 0){
//         arr.push(0);
//         i++;
//     }else{
//         arr.push(i);
//     }
// };

// for(let i = 0, j =0; i < arr.length; i++){
    //задание 3.2
    // if( i % 2 === 0){
    //     console.log(arr[i]);
    // };

    //задание 3.3
    // if(arr[i] % 2 === 0 && arr[i] !== 0){
    //     console.log(arr[i]);
    // };

    //задание 3.4 и 3.5
    // if(arr[i] === 0){
    //     console.log(i);
    //     ++j
    // };
    // if(i === arr.length - 1){
    //     console.log(`counter 0 = ${j}`)
    // }
// };

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

// class Book {
//     constructor(author, bookname, year, publiher ){
//         this.author = author;
//         this.bookname = bookname;
//         this.year = year;
//         this.publiher = publiher;
//     };
//     relise() {
//         console.log(this.year)
//     }
// }
// class EBook extends Book {
//     constructor(author, bookname, year, publiher, format, eNumber){
//         super(author, bookname, year, publiher)
//         this.format = format;
//         this.eNumber = eNumber;
//     }
// }

// const newBook = new Book('hermes', 'porter', 1992, 'hermeser');
// const newBook2 = new EBook('hermes', 'prterer', 1995, 'hermeser', 'pdf', 123123);

// 5
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
// это целое число, которая функция принимает в качестве параметра, с
// такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

// function numbers(num){
//     for(let i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz')
//         } else if(i % 3 === 0){
//             console.log('fizz')
//         } else if(i % 5 === 0) {
//             console.log('buzz')
//         } else{
//             console.log(i)
//         }
//     }
// }

// Advanced level:

// 2.1 Создать на основе имеющихся обьектов классы, и внести в них логику обьектов
// 2.2 Добавить классу студента свойство dateOfApplication - дату его поствупления в университет. Использовать обьект Date для решения задачи
// 2.3 Добавить классам геттеры и сеттеры для свойств с проверками(правильные типы данных, реалистичные диапазоны и т.д). 
// 2.4 Добавить геттер для курса студента. Для расчета текущего курса использовать dateOfApplication и методы обьекта Date. 
// Также модифицировать проверки при создании студента, чтобы курс не превышал 5.

// 3.1*Инициализация с помощью случайных чисел
// class Student {
//     constructor(name, )
// }