- **Classificação**: Criacional

O Design Pattern **Singleton** garante que uma classe possua uma única (_single_) instância compartilhada por toda a aplicação.

## O problema

Imagine que você precisa compartilhar um mesmo estado de um objeto por toda a aplicação — e esse estado pode mudar durante a execução do programa.

Como resolver este problema?

## A solução

A ideia aqui é que a própria classe gerencie a criação do objeto, (`1`) guardando sua instância em uma propriedade estática e (`2`) disponibilizando um método que irá servir de construtor/acessor da instância que será guardada e reutilizada.

- É importante garantir que os construtores da classe são privados (`3`).

```java
public class MySingleton {

  private static MySingleton INSTANCE; // 1
	
  // 3
  private MySingleton() {
  }

	// 2
  public static MySingleton instance() {
    if (INSTANCE == null) {
      INSTANCE = new MySingleton();
    }
    return INSTANCE;
  }

}
```

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>É muito comum a utilização desse padrão em jogos, configurações de conexão a banco de dados, serviços de cache, etc.</p>
  </div>
</aside>

## Para ir mais fundo

- <https://refactoring.guru/design-patterns/singleton>