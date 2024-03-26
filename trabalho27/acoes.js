class Circulo{
    constructor(raio){
    this.raio = raio; }

    getRaio(){
    return this.raio; }

    setRaio(raio){
    this.raio = raio; }

    calcArea(){
    let area = 3.14 * (this.raio * this.raio);
    return area; }

    calcPerimetro(){
    let peri = 2 * 3.14 * this.raio;
    return peri; }
}


//------------------------------------------------------------------------------------------------------------------------------

class ContaBancaria{
    constructor(numConta, titular, saldo){
     this.numConta = numConta;
     this.titular = titular;
     this.saldo = saldo; }

    getNumConta(){
return this.numConta; }

    setNumConta(numConta)
    { this.numConta = numConta; }

    getTitular(){
return this.titular; }

    setTitular(titular){ this.titular = titular; }

    getSaldo(){
return this.saldo; }

    setSaldo(saldo){ this.saldo = saldo; }

    depositar(valor){ this.saldo = this.saldo + valor;}

    sacar(valor) { this.saldo = this.saldo - valor; }

}


//-------------------------------------------------------------------------------------------------------------------------------

class Retangulo{
    constructor(altura, largura){
     this.altura = altura;
     this.largura = largura;  }

    getAltura(){
        return this.altura; }
       
    setAltura(altura){ this.altura = altura; }

    getLargura(){
        return this.largura; }
       
    setLargura(largura){ this.largura = largura; }

    calcArea(){
    let area = this.altura * this.largura;
    return area; }

    calcPerimetro(){
    let peri = (2 * this.altura) + (2 * this.largura);
    return peri; }
}


//---------------------------------------------------------------------------------------------------------------------------------
//Passa reto que esta dando problema no ex4 e não sei o porquê.

class Estudante{
    constructor(nome, matricula, nota){
        this.nome = nome;
        this.matricula = matricula;
        this.nota = nota; 
    }

    getNome(){
         return this.nome; 
    }

    setNome(nome){ 
        this.nome = nome; 
    }

    getMatricula(){ 
        return this.matricula; 
    }

    setMatricula(matricula){
         this.matricula = matricula; 
    }

    getNotas(){
         return this.nota; 
    }

    setNotas(nota){ 
        this.nota = nota; 
    }

    media(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 6.0) {
    return " Aluno Aprovado! " + media;
    }
    
    if(media <= 6.0){
    return  " Aluno Reprovado! " + media; 
    }
    }
    }


//-------------------------------------------------------------------------------------------------

class Produto{
    constructor(nome, preco, qntEstoque){
     this.nome = nome;
     this.preco = preco;
     this.qntEstoque = qntEstoque; }

    getNome(){ return this.nome; }

    setNome(nome){ this.nome = nome; }

    getPreco(){ return this.preco; }

    setPreco(preco){ this.preco = preco; }
       
    getQntEstoque(){ return this.qntEstoque; }

    setQntEstoque(qntEstoque){ this.qntEstoque = qntEstoque; }
       
    disponivel(){
        if (this.qntEstoque > 0) { return "Sim" ; }
        else { return "Não";}
        }

    valorEstoque(){
        let calc = (this.qntEstoque) * (this.preco);
        return calc; }
}



//-----------------------------------------------------------------------------------------------------

class Carro{
    constructor(marca, modelo, velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }


    getMarca(){
        return this.marca
    }
   
    setMarca(marca){
        this.marca = marca
    }

    getModelo(){
        return this.modelo
    }
   
    setModelo(modelo){
        this.modelo = modelo
    }

    getVelocidade(){
        return this.velocidade
    }
   
    setVelocidade(velocidade){
        this.velocidade = velocidade
    }

    Acelerar(velocidadeNova){
        this.velocidade = Number (this.velocidade) +  Number( velocidadeNova);  
    }

    Frear(velocidadeNova){
        this.velocidade = this.velocidade -  velocidadeNova;  
    }
}


//------------------------------------------------------------------------------------------------------------------------

class Livro{
    contructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.diponivel = true;
    }

    getTitulo(){
    return this.titulo; }

    setTitulo(titulo){
        this.titulo = titulo;
    }

    getAutor(){
        return this.autor; }
   
    setAutor(autor){
    this.autor = autor;
    }

    getPaginas(){
    return this.paginas; }
       
    setPaginas(paginas){
        this.paginas = paginas;
    }

    getDisponivel(){
        return this.disponivel; }
   
    setDisponivel(disponivel){
        this.disponivel = disponivel;
    }

    emprestar(){
        if(this.disponivel) {
            this.setDisponivel(false);
            return "livro emprestado com sucesso!";
        }else {
            return "O livro está indisponível!";
        }
    }

    devolver(){
        if (!this.disponivel) {
            this.setDisponivel(true);
            return "Livro devolvido com sucesso!";
        }else {
            return "O livro não está emprestado!";
        }
    }

    verificar(){
        if(this.disponivel){
            return "Livro diponível!";
        }else {
            return "Livro emprestado!";
        }
    }
}