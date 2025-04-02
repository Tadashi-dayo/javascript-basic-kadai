const date = new Date();

const [month, day, year] = [
  date.getMonth() +1,
  date.getDate(),
  date.getFullYear(),
];

console.log(year +'年'+ month +'月'+ day +'日');


// const options = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// };

// const formattedDate = date.toLocaleDateString('ja-JP', options);
// console.log(formattedDate);