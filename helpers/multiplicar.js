const fs = require('fs');
const color = require('colors');

const getMultiplica = async (base, limite) => {
    try {

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida +=  `${base} x ${i} = ${base * i}\n`;
            
        }

        if (limite) {
            console.log('==================='.underline.green);
            console.log(' TABLA DEL ', base );
            console.log('==================='.underline.green);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Archivo tabla-${base}.txt creado correctamente`.rainbow
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getMultiplica
}