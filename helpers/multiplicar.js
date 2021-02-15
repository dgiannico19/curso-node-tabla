const fs = require('fs');

require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${i * base} \n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base} \n`;
    }
    if (listar) {
      console.log('================'.cyan);
      console.log(`Tabla del ${base}`.green);
      console.log('================'.cyan);

      console.log(salida);
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
