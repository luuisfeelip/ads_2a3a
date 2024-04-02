class Pessoa {
    constructor(pNome,pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome(){
        return this.Nome;
    }
    set Nome (pNome){
        this.nome = pNome;
    }
    get Endereco(){
        return this.Endereco;
    }
    set Endereco(pEndereco){
        this.endereco = pEndereco;
    }
    imprimir(){
        return "Nome: " + this.nome + "\nEndereço: " + this.endereco;
    }
}
class Fisica extends Pessoa{
    constructor(pNome,pEndereco,pCPF,pDataNasc){
        super(pNome,pEndereco);
        this.CPF = pCPF;
        this.DataNasc = pDataNasc;
    }
    get CPF(){
        return this.CPF;
    }
    set CPF(pCPF){
        this.cpf = pCPF;
    }
    get DataNasc(){
        return this.DataNasc;
    }
    set DataNasc(pDataNasc){
        this.datanasc = pDataNasc;
    }
    imprimir(){
        return super.imprimir() + "\nCPF: " + this.cpf + "\nData de Nascimento: " + this.datanasc;
    }
}
class Juridica extends Pessoa{
    constructor(pNome,pEndereco,pCNPJ,pRzSocial){
        super(pNome,pEndereco);
        this.CNPJ = pCNPJ;
        this.RzSocial = pRzSocial;
    }
    get CNPJ(){
        return this.CNPJ;
    }
    set CNPJ(pCNPJ){
        this.cnpj = pCNPJ;
    }
    get RzSocial(){
        return this.RzSocial;
    }
    set RzSocial(pRzSocial){
        this.rzsocial = pRzSocial;
    }
    imprimir(){
        return super.imprimir() + "\nCNPJ: "+ this.cnpj + "\nRazão Social: "+ this.rzsocial;
    }
}
console.log('Pessoa Física')
var PessoaFisica = new Fisica('Kaique Anderson Márcio dos Santos','Avenida Paraná, s/n','118.388.550-41','19/05/1995');
console.log(PessoaFisica.imprimir());
console.log('\n')
console.log('Pessoa Jurídica')
var PessoaJuridica = new Juridica('Marcos Vinicius Eduardo Araújo','Rua José Vidal, 91','67.931.299/0001-79','Filmagens LTDA')
console.log(PessoaJuridica.imprimir());
