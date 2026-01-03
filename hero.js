// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    static ataquesPorTipo = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };
  
    atacar() {
      const ataque = Heroi.ataquesPorTipo[this.tipo];
      if (ataque) {
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
      } else {
        console.log(`o ${this.tipo} atacou usando um ataque básico`);
      }
    }
}

const acao = new Heroi("Merlin", 120, "mago");
acao.atacar(); // Saída: o mago atacou usando magia
