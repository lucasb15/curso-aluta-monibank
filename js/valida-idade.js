export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não e maior de idade')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth() + 18, data.getUTCDate() + 18);

    return dataAtual >= dataMais18;
}