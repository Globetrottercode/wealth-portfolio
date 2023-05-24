let obj = {
  name: "Souvik",
  age: 22,
  B: function () {
    console.log("inside function B", this);
    console.log(this.name);
  },
  C: () => {
    this.abc = 23;
    console.log(this);
  },
};

//let obj1 = new normalFunction();
// obj = {
//   this: {
//     name: Souvik,
//   },
// };
obj.B();
obj.C();
console.log(obj.name);
