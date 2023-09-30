const html = (strings, personExp, ageExp) => {
  console.log(strings);
  console.log(personExp);
  console.log(ageExp);
};

const person = "Hoang An";
const age = 31;
const address = "Phu Tho";
const str = `Tôi tên là ${person}, toi ${age} tuoi`;

const output = html`Tôi tên là ${person}, toi ${age} tuoi. O ${address} abc`;
