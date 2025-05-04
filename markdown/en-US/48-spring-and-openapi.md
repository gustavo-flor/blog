OpenAPI, also known as Swagger, is a way to specify and document your HTTP API.

It is a standardized, language-agnostic method that allows exposing the patterns and behaviors of a service without accessing the application's source code or any other type of documentation.

In this text, we aim to learn how to document our Spring applications with OpenAPI.

## In Detail

### 1. Installing the Dependency

To use OpenAPI, you need to add the `springdoc-openapi-starter-webmvc-ui` library to your Spring application.

Add the new dependency to your project’s configuration file.

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

### 2. Using OpenAPI

Done! No additional configuration is needed.

Once the application is running, you will have:

- Swagger UI available at `/swagger-ui.html`
- OpenAPI doc available at `/v3/api-docs`

#### Changing the Default Path

If you want to change one of the paths, just configure it in `application.yml` or `application.properties`.

Here’s an example:

```yaml
springdoc:
    swagger-ui:
        path: <desired new path>
    api-docs:
        path: <desired new path>
```

### 3. Customizing Your Documentation

There are two ways to customize your OpenAPI documentation.

#### Annotations

The Springdoc library provides numerous annotations for customizing your documentation. Learn more on the [official library site](https://springdoc.org/).

```kotlin
@Operation(summary = "Create a user")
@ApiResponses(value = [
	ApiResponse(responseCode = "201", description = "User Created")
])
@PostMapping("/v1/users")
@ResponseStatus(HttpStatus.CREATED)
fun createUser(@RequestBody payload: CreateUserPayload): User
```

#### Configuration

The Springdoc library also supports programmatic customization through a configuration file.

To learn more, visit the [official library site](https://springdoc.org/).

```java
@Configuration
public class OpenAPIConfig {
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

## Moral of the Story

As you can see, with just a few lines of code, we can quickly and automatically integrate our entire Spring application.

I hope this was helpful! Thank you very much for reading!

## Go Deeper

- <https://springdoc.org/>
- <https://www.openapis.org/>