export class SistemaAutetincacao {
    static login(autenticavel, senha) {
        if(SistemaAutetincacao.objetoAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static objetoAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}
