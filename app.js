// calc(6);
// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// let number = 3;
// switch (number) {
//   case 1:
//     console.log("yomon");
//     break;

//   case 2:
//     console.log("qoniqarsiz");
//     break;

//   case 3:
//     console.log("qoniqarli");
//     break;

//   case 4:
//     console.log("yaxshi");
//     break;

//   case 5:
//     console.log("a'lo");
//     break;
// }

// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")
// let number = 11;
// switch (number) {
//   case 1:
//     console.log("Qish Fasli");
//     break;

//   case 2:
//     console.log("Qish Fasli");
//     break;

//   case 3:
//     console.log("Bahor Fasli");
//     break;

//   case 4:
//     console.log("Bahor Fasli");
//     break;

//   case 5:
//     console.log("Bahor Fasli");
//     break;

//   case 6:
//     console.log("Yoz Fasli");
//     break;

//   case 7:
//     console.log("Yoz Fasli");
//     break;

//   case 8:
//     console.log("Yoz Fasli");
//     break;

//   case 9:
//     console.log("Kuz Fasli");
//     break;

//   case 10:
//     console.log("Kuz Fasli");
//     break;

//   case 10:
//     console.log("Kuz Fasli");
//     break;

//   case 11:
//     console.log("Qish Fasli");
//     break;

//   case 12:
//     console.log("Qish Fasli");
//     break;
// }

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// let number = "mart";
// switch (number) {
//   case "mart":
//     console.log("31");
//     break;

//   case "aprel":
//     console.log("30");
//     break;

//   case "may":
//     console.log("31");
//     break;

//   case "iyun":
//     console.log("30");
//     break;

//   case "iyul":
//     console.log("31");
//     break;

//   case "avgust":
//     console.log("30");
//     break;

//   case "sentiyabr":
//     console.log("31");
//     break;

//   case "oktyabr":
//     console.log("30");
//     break;

//   case "noyabr":
//     console.log("31");
//     break;

//   case "dekabr":
//     console.log("30");
//     break;

//   case "yanvar":
//     console.log("31");
//     break;

//   case "febral":
//     console.log("28");
//     break;
// }

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// let number = 4;
// let L = 300;
// switch (number) {
//   case 1:
//     console.log(`${L} didsimetr = ${L / 10} metr`);
//     break;

//   case 2:
//     console.log(`${L} kiometr = ${L * 1000} metr`);
//     break;

//   case 3:
//     console.log(` ${L} metr`);
//     break;

//   case 4:
//     console.log(`${L} millimetr = ${L / 1000} metr`);
//     break;

//   case 5:
//     console.log(`${L} santimetr = ${L / 100} metr`);
//     break;
// }

// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

// let number = 3;
// let M = 300;
// switch (number) {
//   case 1:
//     console.log(` ${M} kiogram`);
//     break;

//   case 2:
//     console.log(`${M} milligram = ${M / 1000} kilogram`);
//     break;

//   case 3:
//     console.log(`${M} gramm = ${M / 100} kilogram`);
//     break;

//   case 4:
//     console.log(`${M} tonna = ${M * 1000} kilogram`);
//     break;

//   case 5:
//     console.log(`${M} sentner = ${M * 10} kilogram`);
//     break;
// }

// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// let number = 10;
// let yil = 2025;
// let kun = 21;

// switch (number) {
//   case 3:
//     console.log(`${kun}.0${number}.${yil}`);
//     break;

//   case 4:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 5:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 6:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 7:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 8:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 9:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 10:
//     console.log(`${kun}.${number}.${yil}`);

//     break;

//   case 11:
//     console.log(`${kun}.${number}.${yil}`);

//     break;

//   case 12:
//     console.log(`${kun}.${number}.${yil}`);

//     break;

//   case 1:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;

//   case 2:
//     console.log(`${kun}.0${number}.${yil}`);

//     break;
// }

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// let number = 6;
// let yil = 2025;
// let kun = 5;

// switch (number) {
//   case 3:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }
//     break;

//   case 4:
//     if (kun < 30) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 5:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 6:
//     if (kun < 30) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 7:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 8:
//     if (kun < 30) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 9:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 10:
//     if (kun < 30) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 11:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 12:
//     if (kun < 30) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 1:
//     if (kun < 31) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;

//   case 2:
//     if (kun < 28) {
//       console.log(`${kun + 1}.${number} `);
//     } else {
//       console.log(`1.0${number + 1} `);
//     }

//     break;
// }

// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

// let K = "g";
// let Y = 1;
// switch (K) {
//   case "sh":
//     if (Y == 1) {
//       console.log(`Shimol, chap tomonga buril`);
//     } else {
//       console.log("Shimol o'ng tomonga buril");
//     }
//     break;

//   case "j":
//     if (Y == 1) {
//       console.log(`Janub, chap tomonga buril`);
//     } else {
//       console.log("Janub o'ng tomonga buril");
//     }
//     break;

//   case "q":
//     if (Y == 1) {
//       console.log(`Sharq, chap tomonga buril`);
//     } else {
//       console.log("Sharq o'ng tomonga buril");
//     }
//     break;

//   case "g":
//     if (Y == 1) {
//       console.log(`G'arb, chap tomonga buril`);
//     } else {
//       console.log("G'arb o'ng tomonga buril");
//     }
//     break;
// }

// Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)

// let number = 19;

// switch (number) {
//   case 10:
//     console.log("O'nta masala");
//     break;

//   case 11:
//     console.log("O'n bitta masala");
//     break;

//   case 12:
//     console.log("O'n ikkita masala");
//     break;

//   case 13:
//     console.log("O'n uchta masala");
//     break;

//   case 14:
//     console.log("O'n tortta masala");
//     break;

//   case 15:
//     console.log("O'n beshta masala");
//     break;

//   case 16:
//     console.log("O'n oltita masala");
//     break;

//   case 17:
//     console.log("O'n yettita masala");
//     break;

//   case 18:
//     console.log("O'n sakkista masala");
//     break;

//   case 19:
//     console.log("O'n to'qqizta masala");
//     break;

//   case 20:
//     console.log("Yigirmatta masala");
//     break;
// }

// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").
// let number = 115;

// switch (number) {
//   case 110:
//     console.log("Bir Yuzi O'nta masala");
//     break;

//   case 111:
//     console.log("Bir Yuzi O'n bitta masala");
//     break;

//   case 112:
//     console.log("Bir Yuzi O'n ikkita masala");
//     break;

//   case 113:
//     console.log("Bir Yuzi O'n uchta masala");
//     break;

//   case 114:
//     console.log("Bir Yuzi O'n tortta masala");
//     break;

//   case 115:
//     console.log("Bir Yuzi O'n beshta masala");
//     break;

//   case 116:
//     console.log("Bir Yuzi O'n oltita masala");
//     break;

//   case 117:
//     console.log("Bir Yuzi O'n yettita masala");
//     break;

//   case 118:
//     console.log("Bir Yuzi O'n sakkista masala");
//     break;

//   case 119:
//     console.log("Bir Yuzi O'n to'qqizta masala");
//     break;

//   case 120:
//     console.log("Bir Yuzi Yigirmata masala");
//     break;
// }
