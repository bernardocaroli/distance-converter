const KMInput = document.querySelector("#quilometros > input"); //Está querendo pegar o input (o valor que digitamos) dentro da Id km
const MILESInput = document.querySelector("#milhas > input"); //Está querendo pegar o input (o valor que digitamos) dentro da Id miles


function KMPrincipal () {
    const kmMET = parseFloat(KMInput.value); //está pegando o valor que o usuário digita e salvando na constante
    const milesMET = (kmMET * 0.621371); 
    MILESInput.value = milesMET; 
}; 


function MILESPrincipal () {
    const milesMET = parseFloat(MILESInput.value);
    const kmMET = (milesMET * 1.60934);
    KMInput.value = kmMET;
};


function main() {
KMInput.addEventListener("input", KMPrincipal);  
MILESInput.addEventListener("input", MILESPrincipal);    
}

main();