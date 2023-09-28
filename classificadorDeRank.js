let status = [
    ["Delio" , 7550]
]
let nivel = "";

if (status[0][1] <= 1000) {
    nivel = "Ferro"
} else if (status[0][1] >= 1001 && status[0][1] <= 2000) {
    nivel = "Bronze"
} else if (status[0][1] >= 2001 && status[0][1] <= 5000) {
    nivel = "Prata"
} else if (status[0][1] >= 6001 && status[0][1] <= 7000) {
    nivel = "Ouro"
} else if (status[0][1] >= 7001 && status[0][1] <= 8000) {
    nivel = "Platina"
} else if (status[0][1] >= 8001 && status[0][1] <= 9000) {
    nivel = "Ascendente"
} else if (status[0][1] >= 9001 && status[0][1] <= 10000) {
    nivel = "Imortal"
} else if (status[0][1] >= 10001) {
    nivel = "Radiante"
} else {
    nivel = "ranking desconhecido"
}

console.log("O Herói de nome " + status[0][0] + " está no nível de " + nivel)