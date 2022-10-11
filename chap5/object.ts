const a = {
  value: 25,
};

const b = {
  value: 25,
};

const c = { ...a };

console.log(a == b, a == c);

c.value = 999;

const d = "helqp";

console.log(a, c);
