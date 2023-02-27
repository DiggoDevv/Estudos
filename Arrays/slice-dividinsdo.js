    const alunos = [
'João',
'Juliana', 
'Ana', 
'Caio', 
'Lara',
'Marjorie', 
'Guilherme', 
'Aline',
'Fabiana', 
'Andre',
'Carlos', 
'Paulo',
'Bia',
'Vivian',
'Isabela',
'Vinícius',
'Renan',
'Renata',
'Daisy',
'Camilo'];
//slice serve para separar/dividir uma array/lista
const sala1 = alunos.slice(0, alunos.lenght / 2) //divide por dois para pegar metade
const sala2 = alunos.slice(alunos.length / 2)
console.log(sala1)
console.log(sala2)