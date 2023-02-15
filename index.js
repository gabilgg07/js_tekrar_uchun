// ES6 Refresher JS

// =====================================

// var, let, const:

// var - keyword-u scoped based deyiller, yeni
//       bir scope icerisinde yazilsa da, scope-dan kenarda cagrila bilir.
//       eslinde amma butun proqram dillerinde oldugu kimi,
//       undefined - teyin edilmeyib qaytarmali idi.

if (true) {
  var test = "Test Var";
}

console.log("test: ");
console.log(test);
console.log("---------------------\n");
// let - ise eksine colde cagrila bilmir, teyil edilmeyib qaytarir

if (true) {
  let test2 = "Test Let";
}

try {
  console.log("test2:");
  console.log(test2);
  console.log("---------------------\n");
} catch (error) {
  console.error(
    "Error: test2 - ni gostere bilmedi, cunki let scope xaricinde cagrila bilmir"
  );
  console.log("---------------------\n");
}

// const - bir defe teyin edilir, sonra deyisdirile bilmir

const test3 = "Test Const";

try {
  test3 = "Const deyisdirilme cehti";
  console.log("test3:");
  console.log(test3);
  console.log("---------------------\n");
} catch (error) {
  console.error("Error: test3 deyisdirile bilmedi, cunki const-dur");
  console.log("---------------------\n");
}

// lakin, const reference type -in ancaq adresi deyismir, icindeki parametrlerinn deyeri deyisdirile bilir

const person = {
  name: "Ali",
  age: 28,
};

console.log("person.name evvel:");
console.log(person.name);

person.name = "Faiq";
console.log("person.name sonra:");
console.log(person.name);
console.log("---------------------\n");

// eyni zamanda bir const array-e push veya pop methodlari ile artirib, azaltmaq olur

const nums = [43, 90, 54, 18];

console.log("nums evvel:");
console.log(nums);

nums.push(34);
console.log("nums.push(34)-dan sonra:");
console.log(nums);
console.log("---------------------\n");

console.log("\n========================================\n\n");
// =====================================

// function, arrow function:

// function - daxilinde this keyword-u ozunden 1 yuxarida object varsa onu qaytarir,
//            yoxdursa, ve ya yene function varsa window-u qaytarir

var personFunction = {
  name: "PersonFunction",
  sayHi: function () {
    console.log("this in personFunction.sayHi:");
    console.log(this);
    console.log("--------1---------");

    function sayHiInside() {
      console.log("this in personFunction.sayHiInside:");
      console.log(this);
      console.log("--------2---------");

      function sayHiInsideInside() {
        console.log("this in personFunction.sayHiInsideInside:");
        console.log(this);
        console.log("--------3---------");
      }

      sayHiInsideInside();
    }

    sayHiInside();
  },
  personInPersonFunction: {
    name: "PersonInPersonFunction",
    personInPersonFunctionSayHi: function () {
      console.log(
        "this in personInPersonFunction.personInPersonFunctionSayHi:"
      );
      console.log(this);
      console.log("--------11---------");

      function personInPersonFunctionSayHiInside() {
        console.log(
          "this in personInPersonFunction.personInPersonFunctionSayHiInside:"
        );
        console.log(this);
        console.log("--------22---------");

        function personInPersonFunctionSayHiInsideInside() {
          console.log(
            "this in personInPersonFunction.personInPersonFunctionSayHiInsideInside:"
          );
          console.log(this);
          console.log("--------33---------");
        }

        personInPersonFunctionSayHiInsideInside();
      }

      personInPersonFunctionSayHiInside();
    },
  },
};

console.log("personFunction.sayHi:");
personFunction.sayHi();
console.log("\n---------------------\n\n");

console.log("personInPersonFunction.personInPersonFunctionSayHi:");
personFunction.personInPersonFunction.personInPersonFunctionSayHi();
console.log("\n---------------------\n\n");

// arrow function - daxilindeki this keyword-u ise
//                  ozunden yuxarida tapdigi ilk object-i qaytarir

var personArrow = {
  name: "PersonArrow",
  sayHi: () => {
    console.log("this in personArrow.sayHi:");
    console.log(this);
    console.log("--------111---------");

    let sayHiInside = () => {
      console.log("this in personArrow.sayHiInside:");
      console.log(this);
      console.log("--------222---------");

      let sayHiInsideInside = () => {
        console.log("this in personArrow.sayHiInsideInside:");
        console.log(this);
        console.log("--------333---------");
      };

      sayHiInsideInside();
    };

    sayHiInside();
  },
  personInPersonArrow: {
    name: "PersonInPersonArrow",
    personInPersonArrowSayHi: () => {
      console.log("this in personInPersonArrow.personInPersonArrowSayHi:");
      console.log(this);
      console.log("--------1111---------");

      let personInPersonArrowSayHiInside = () => {
        console.log(
          "this in personInPersonArrow.personInPersonArrowSayHiInside:"
        );
        console.log(this);
        console.log("--------2222---------");

        let personInPersonArrowSayHiInsideInside = () => {
          console.log(
            "this in personInPersonArrow.personInPersonArrowSayHiInsideInside:"
          );
          console.log(this);
          console.log("--------3333---------");
        };

        personInPersonArrowSayHiInsideInside();
      };

      personInPersonArrowSayHiInside();
    },
  },
};

console.log("personArrow.sayHi:");
personArrow.sayHi();
console.log("\n---------------------\n\n");

console.log("personInPersonArrow.personInPersonArrowSayHi:");
personArrow.personInPersonArrow.personInPersonArrowSayHi();
console.log("\n---------------------\n\n");

console.log("\n========================================\n\n");
// =====================================

// Array methods:

const cities = ["Baki", "Sumqayit", "Gence", "Mingecevir"];

// forEach - tek-tek butun item-lari, index-leri oxumaq ucun:
console.log("cities.forEach: ");
cities.forEach((city, index, array) => {
  if (index == 0) {
    console.log(array);
  }
  console.log(index + ". " + city);
});
console.log("\n---------------------\n\n");

// map - her bir item uzerinde istenilen deyisiklik edilerek, yeni array yaradib qaytarir:

console.log(`cities.map((city) => "city -" + city): `);
console.log(cities.map((city) => city + " seheri"));
console.log("cities: ");
console.log(cities);
console.log("\n---------------------\n\n");

// filter - predicate-e esasen yoxlayaraq filtirleyir ve yeni array yaradib qaytarir:

console.log(`cities.filter((value, index, array) => {index !==2}): `);
console.log(cities.filter((value, index, array) => index !== 2));
console.log("cities: ");
console.log(cities);
console.log("\n---------------------\n\n");

// rest ve spread(genislendirmek) operatoru (...) islendiyi yere gore:

// spread - 1 array-i basqa bir array-in icine qoymaq:

const arr = [1, 2, 3];
console.log("arr: ");
console.log(arr);

const arr2 = [...arr, 4, 5, 6];
console.log("[...arr, 4, 5, 6]: ");
console.log(arr2);

const arr3 = [...arr2.filter((num) => num % 2 === 0), 8, 10, 12];
console.log("[...arr2.filter((num) => num % 2 === 0), 8, 10, 12]: ");
console.log(arr3);

const arr4 = [...arr, 4, 5, 6, ...arr, 7, 8, 9];
console.log("[...arr, 4, 5, 6, ...arr, 7,8,9]: ");
console.log(arr4);

console.log("\n---------------------\n\n");

// object-lerde de isleyir:

const per1 = {
  name: "Setdar",
  age: 29,
};

console.log("per1: ");
console.log(per1);

const per1Full = {
  ...per1,
  email: "setdar99@gmail.com",
};

console.log(`const per1Full = {
    ...per1,
    email: "setdar99@gmail.com",
  };`);
console.log(per1Full);

console.log("\n---------------------\n\n");

// destructuring - object parametrini object-den kenara cixartmaq

const profile = {
  name: "Samir",
  address: {
    city: "Baki",
    street: "Tebriz",
    home: "14b",
  },
  hobbies: ["music", "photografing"],
};

console.log("profile: ");
console.log(profile);

const { city } = profile.address;

console.log("const { city } = profile.address ");
console.log("city: ");
console.log(city);

const { hobbies } = profile;
console.log("const { hobbies } = profile ");
console.log("hobbies: ");
console.log(hobbies);

// array-lerde de isleyir:

const n = [76, 98, 32];

console.log("n:");
console.log(n);

const [first, ikinci, son] = n;

console.log("const [first, ikinci, son] = n");
console.log("ikinci:");
console.log(ikinci);
console.log("first:");
console.log(first);
console.log("son:");
console.log(son);

console.log("\n========================================\n\n");
// =====================================

// Class

// c#-laa ferqi -> miras verdikde ":" (qosa-noqte) evezine "extends" yaziriq,
//                 constructorda, "base"-ye melumat oturende
//                 "super" methodundan istifade edirik.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const p1 = new Person("Sabir", 27);
const p2 = new Person("Sahil", 32);

console.log("p1.greet()");
console.log(p1.greet());
console.log("p2.greet()");
console.log(p2.greet());

// Subclass -> miras almis

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const c1 = new Customer("Melik", 36, 350);

console.log("c1.greet()");
console.log(c1.greet());
console.log("c1.info()");
console.log(c1.info());
