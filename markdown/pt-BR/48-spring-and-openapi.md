O OpenAPI, também conhecido como Swagger, é uma forma de especificar e documentar sua API HTTP. 

É uma forma padronizada e agnóstica à linguagem que permite expor os padrões e comportamentos de um serviço sem precisar acessar o código fonte da aplicação ou qualquer outro tipo de documentação.

Neste texto, temos como objetivo aprender a documentar nossas aplicações Spring com OpenAPI.

## Em detalhes

### 1. Instalando a dependência

Para utilizar o OpenAPI, é necessário adicionar a lib `springdoc-openapi-starter-webmvc-ui` na sua aplicação Spring. 

Adicione a nova dependência no respectivo arquivo de configurações do seu projeto.

- **pom.xml**

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>
```

- **build.gradle**

```groovy
implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.5.0'
```

### 2. Utilizando o OpenAPI

Pronto, mais nenhuma configuração é necessária.

Ao subir a aplicação, você terá:

- Swagger UI disponível em `/swagger-ui.html`
- OpenAPI doc. disponível em `/v3/api-docs`

#### Alterando o caminho padrão

Se você quiser alterar um dos caminhos, basta configurar em `application.yml` ou `application.properties`.

Veja o exemplo a seguir:

```yaml
springdoc:
    swagger-ui:
        path: <novo caminho desejado>
    api-docs:
        path: <novo caminho desejado>
```

### 3. Customizando sua doc.

Temos duas formas de customizar sua OpenAPI.

#### Anotações

A biblioteca do Springdoc disponibiliza inúmeras anotações para customizar sua documentação, conheça mais no [site oficial da biblioteca](https://springdoc.org/).

```kotlin
@Operation(summary = "Create an user")
@ApiResponses(value = [
	ApiResponse(responseCode = "201", description = "User Created")
])
@PostMapping("/v1/users")
@ResponseStatus(HttpStatus.CREATED)
fun createUser(@RequestBody payload: CreateUserPayload): User
```

#### Configuração

A biblioteca do Springdoc também disponibiliza a customização programática através de um arquivo de configuração.

Para saber mais acesse o [site oficial da biblioteca](https://springdoc.org/).

```java
@Configuration
public OpenAPIConfig {
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
            .info(new Info().title("Custom Name API")
            .description("Some nice and meaningful description")
            .version("v0.0.1")
            .license(new License().name("Apache 2.0").url("http://domain.custom/license")))
            .externalDocs(new ExternalDocumentation().url("http://domain.custom/docs"));
    }
}
```

## Moral da história

Como foi possível ver, com poucas linhas de código conseguimos integrar de forma rápida e automatizada toda nossa aplicação Spring. 

Espero que tenha sido útil! Muito obrigado por ler até aqui!

## Para ir mais fundo

- <https://springdoc.org/>
- <https://www.openapis.org/>