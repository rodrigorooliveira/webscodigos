const tecnologias = new Map() 
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})


console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chaveVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chaveVariadas.has())