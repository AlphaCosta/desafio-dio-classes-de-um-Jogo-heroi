# Desafio DIO: Classes de um Jogo (Herói)

Este projeto é parte do desafio prático da **(DIO)**, com o objetivo de aplicar conceitos fundamentais de **Objetos** em JavaScript.

---

## Objetivo do Desafio

Criar uma **classe genérica** que represente um herói de uma aventura, com as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (ex.: mago, guerreiro, monge, ninja)

Além disso, implementar um método chamado `atacar()` que exibe a mensagem:

```
o {tipo} atacou usando {ataque}
```

Onde `{ataque}` depende do tipo do herói:

| Tipo       | Ataque             |
|------------|---------------------|
| mago       | magia              |
| guerreiro  | espada             |
| monge      | artes marciais     |
| ninja      | shuriken           |

Se o tipo não estiver mapeado, exibir:

```
o {tipo} atacou usando um ataque básico
```

---

## Estrutura do Código

```javascript
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

// Exemplo de uso
const acao = new Heroi("Merlin", 120, "mago");
acao.atacar(); // Saída: o mago atacou usando magia
```

---

## Como Executar

1. Certifique-se de ter o **Node.js** instalado.
2. Salve o código em um arquivo, por exemplo: `heroi.js`.
3. No terminal, execute:

```bash
node heroi.js
```

---

## Exemplos de Saída

```bash
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
o iniciante atacou usando um ataque básico
```

---
## Autor

- **Alex Costa** 
