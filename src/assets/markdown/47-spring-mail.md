O envio de e-mails é um aspecto crucial para diversas aplicações, sendo utilizado para enviar notificações, alertas ou comunicações para os usuários.

Neste texto, vamos explorar como enviar e-mails utilizando o Spring Mail.

Aprenderemos como realizar a instalação e configuração, além de passarmos por algumas funcionalidades mais avançadas, como o envio de HTML, anexo de arquivos e templates de e-mail.

## Em detalhes

### 1. Instalando Spring Mail

Para utilizar o Spring Mail, primeiro é necessário adicionar o módulo à sua aplicação Spring. Adicione a nova dependência no respectivo arquivo de configurações do seu projeto.

- **Maven (pom.xml)**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

- **Gradle (build.gradle)**

```groovy
implementation 'org.springframework.boot:spring-boot-starter-mail'
```

### 2. Propriedades Spring Mail

Após realizar a instação da nova dependência, vamos aprender a configurá-la.

Existem algumas propriedades principais que devemos configurar. Vamos entender cada uma delas:

- `spring`
    - `mail`
        - `protocol`: Protocolo de comunicação para envio do e-mail. Por padrão o valor é ‘smtp’.
        - `host`: Host do servidor SMTP.
        - `port`: Porta do servidor SMTP.
        - `username`: Usuário para autenticação da comunicação.
        - `password`: Senha para autenticação da comunicação.
        - `properties`
            - `mail.smtp.auth`: Define se a conexão deve ou não ser autenticada.
            - `mail.smtp.starttls.enable`: Habilita o STARTTLS, que é um meio de aumentar a segurança e confiabilidade da requisição.

### 3. Configurando Spring Mail

Agora que entendemos as propriedades, devemos configurá-las em nosso arquivo `application.yml` ou `application.properties`.

```yaml
spring:
  mail:
    protocol: 'smtp'
    username: ${MAIL_USERNAME}
    password: ${MAIL_PASSWORD}
    host: ${MAIL_HOST}
    port: ${MAIL_PORT}
    properties:
      mail.smtp.auth: true
      mail.smtp.starttls.enable: true
```

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>Note que alguns valores não estão definidos. Por questões de segurança, a ideia é substituí-los pelos valores corretos através das variáveis de ambiente.</p>
    </div>
</aside>

---

#### Como descobrir quais valores preencher

Talvez você esteja se perguntando agora quais devem ser os valores dessas variáveis. 

Para descobrir isso, é de acordo com o servidor SMTP que você pretende utilizar. 

<aside class="callout">
    <div class="icon">🔍</div>
    <div class="content">
        <p>Uma simples busca no google deve ser suficiente.</p>
        <p><b>Exemplo</b>: “Configurações de SMTP para <i>Provedor do Servidor SMTP</i>”.</p>
    </div>
</aside>

---

Para nossos testes, vamos utilizar o [Mailtrap](https://mailtrap.io/). 

Ele serve como um *mock* de servidor SMTP, ou seja, simula um servidor SMTP, porém não envia nenhum e-mail de verdade.

Se você também deseja utilizar, basta criar uma conta na plataforma, criar um projeto com uma inbox, acessá-la e conferir as configurações SMTP. 

Mas é importante ressaltar que, em produção, é recomendado utilizar um servidor SMTP especializado como Gmail, Amazon SES, etc.

### 4. Enviando seu primeiro e-mail

Para enviar seu primeiro e-mail, primeiro vamos criar uma classe de serviço chamada `MailService`

```java
@Service
public class MailService {
}
```

Agora, vamos adicionar a dependência para o `JavaMailSender`, que é o componente do Spring responsável pelo envio de e-mail.

```java
@Service
public class MailService {
    private final JavaMailSender mailSender;

    public MailService(final JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }
}
```

Então, podemos implementar o método `send`, que instancia a mensagem de e-mail e a envia.

```java
@Service
public class MailService {
    private final JavaMailSender mailSender;

    public MailService(final JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void send(final String to, final String subject, final String text) {
        final var mailMessage = new SimpleMailMessage(); // 1
        mailMessage.setFrom("noreply@mail.test"); // 2
        mailMessage.setTo(to); // 3
        mailMessage.setSubject(subject); // 4 
        mailMessage.setText(text); // 5
        mailSender.send(message); // 6
    }
}
```

Vamos entender a lógica do método linha por linha…

1. Instanciamos o objeto de mensagem do e-mail.
2. Definimos o e-mail de origem (quem está enviando).
3. Definimos o e-mail de destino.
4. Definimos o título do e-mail.
5. Definimos o corpo do e-mail, o seu conteúdo.
6. Realizamos o envio do e-mail através do `JavaMailSender`.

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>O objeto da mensagem de e-mail possui inúmeros outros atributos para serem configurados (todos opcionais). Recomendo brincar com esses valores e entender o comportamento de cada configuração.</p>
    </div>
</aside>

### 5. Escrevendo textos com HTML

Para enviar e-mails com HTML, será necessário realizar alguns pequenos ajustes no nosso método `send`. Veja o que deve ser feito:

```java
@Service
public class MailService {
    private final JavaMailSender mailSender;

    public MailService(final JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void send(final String to, final String subject, final String htmlText) {
        final var mailMessage = javaMailSender.createMimeMessage(); // 1
        try {
            final var helper = new MimeMessageHelper(mailMessage, true, "UTF-8"); // 2
            helper.setFrom("noreply@mail.test");
            helper.setTo(to); 
            helper.setSubject(subject); 
            helper.setText(htmlText, true); // 3
            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

Vamos entender as principais alterações:

1. Para o envio de e-mail com HTML, é necessário criar uma instância especial de objeto de mensagem, uma `MimeMessage`.
2. Também é necessário instanciar o `MimeMessageHelper`, objeto responsável por montar a mensagem com o HTML.
3. Então, basta enviarmos o texto com HTML. É importante ressaltar que a flag `true` deve ser enviada como segundo parâmetro para habilitar a renderização do HTML.

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>Para criar um template de e-mail, você pode utilizar o Thymeleaf em conjunto com a funcionalidade de envio de HTML. <a href="https://www.thymeleaf.org/doc/articles/springmail.html" target="_blank" rel="noreferrer">Clique aqui e saiba mais</a>.</p>
    </div>
</aside>

### 6. Anexando arquivos ao seu e-mail

Para anexar um arquivo, a configuração é bem semelhante ao envio de textos em HTML. Vejamos:

```java
@Service
public class MailService {
    private final JavaMailSender mailSender;

    public MailService(final JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void send(final String to, final String subject, final String text) {
        final var mailMessage = javaMailSender.createMimeMessage(); 
        try {
            final var helper = new MimeMessageHelper(mailMessage, true, "UTF-8");
            helper.setFrom("noreply@mail.test");
            helper.setTo(to); 
            helper.setSubject(subject); 
            helper.setText(text);
            final var file = ResourceUtils.getFile("classpath:file.txt"); // 1
            helper.addAttachment("filename", file); // 2
            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

Como podemos ver, apenas duas linhas foram adicionadas, vamos entender:

1. Buscamos o arquivo que desejamos anexar. Ajuste o endereço do arquivo de acordo com suas necessidades.
2. Basta definir o nome do arquivo que será enviado e anexá-lo.

## Moral da história

Em resumo, aprender a enviar e-mails com o Spring Mail é fundamental para diversas aplicações.

Além disso, suas funcionalidades avançadas, como envio de HTML, anexo de arquivos e templates de e-mail, podem ser exploradas para proporcionar uma comunicação eficaz com os usuários.

Espero que o texto seja útil para você! Obrigado pela leitura!