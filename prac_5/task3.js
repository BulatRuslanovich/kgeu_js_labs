function studentInfoToString() {
  return `${this.first_Name} ${this.last_Name} обучается в группе ${this.group}. Год поступления ${this.year}`;
}

const s1 = {
  first_Name: "Булат",
  last_Name: "-",
  group: "ТРП-3-22",
  year: 2022
};

const s2 = {
  first_Name: "Сайдаш",
  last_Name: "-",
  group: "ТРП-3-22",
  year: 2022

};

const s3 = {
  first_Name: "Иделия",
  last_Name: "-",
  group: "ТРП-3-22",
  year: 2022
};

s1.describe = studentInfoToString;
s2.describe = studentInfoToString;
s3.describe = studentInfoToString;

console.log(s1.describe());
console.log(s2.describe());
console.log(s3.describe());

