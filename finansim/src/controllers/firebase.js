/* Não usada */

import auth from '@react-native-firebase/auth';

const cadastro = (email, senha, senha_confirmada) => {
    if ( senha === senha_confirmada ) {
        auth().createUserWithEmailAndPassword(email,senha);
    }

    else {
        mensagemErro = 'As senhas não coincidem!';
    }
}

export { cadastro };