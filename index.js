var nombres = [
    1,
    "9",
    new Number(3),
]

function addition(nombres) {
    if(!Array.isArray(nombres)) {
        throw new Error('Le paramètre doit être un tableau')
    }

    var nb = 0
    for (var i = 0; i < nombres.length; i++) {
        var nbActual = nombres[i]
        nbActual = parseInt(nbActual)

        if(isNaN(nbActual)) {
            console.log('Attention, ' + nbActual + ' n\'est pas un nombre')
            continue
        }

        nb += nbActual
    }
    return nb
}

module.exports = addition