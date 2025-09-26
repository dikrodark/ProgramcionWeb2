const inicio = 0;
const fin = 10;
const paso = 0.01;

const n = Math.round((fin - inicio) / paso) + 1;


const tE = [];

for (let i = 0; i < n; i++) {
  tE.push(inicio + i * paso);
}

tE.forEach((valor, indice) => {
  console.log(`tE[${indice}] = ${valor.toFixed(2)} s`);
});

