import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutetincacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Julio", 5000, 13567897620);
gerente.cadastrarSenha("246802");

const cliente = new Cliente("Ferreira", 14798634520, "763");

const gerenteLogado = SistemaAutetincacao.login(gerente, "246802");
const diretorLogado = SistemaAutetincacao.login(diretor, "123456789");
const clienteLogado = SistemaAutetincacao.login(cliente, "763");

console.log(gerenteLogado, diretorLogado, clienteLogado);
