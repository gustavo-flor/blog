Sending emails is a crucial aspect of many applications, used for notifications, alerts, or user communications.

In this text, we will explore how to send emails using Spring Mail.

We will learn how to install and configure it, as well as explore advanced functionalities like sending HTML emails, attaching files, and using email templates.

## Details

### 1. Installing Spring Mail

To use Spring Mail, you first need to add the module to your Spring application. Add the new dependency to your project's configuration file.

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

### 2. Spring Mail Properties

After adding the new dependency, let’s configure it.

Here are some key properties to set:

- `spring`
    - `mail`
        - `protocol`: Communication protocol for sending emails. Default is `smtp`.
        - `host`: SMTP server host.
        - `port`: SMTP server port.
        - `username`: Username for authentication.
        - `password`: Password for authentication.
        - `properties`
            - `mail.smtp.auth`: Specifies whether the connection requires authentication.
            - `mail.smtp.starttls.enable`: Enables STARTTLS for enhanced security and reliability.

### 3. Configuring Spring Mail

Now that we understand the properties, configure them in your `application.yml` or `application.properties` file.

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
        <p>Note that some values are not defined. For security reasons, replace them with the correct values using environment variables.</p>
    </div>
</aside>

---

#### How to Determine the Values to Fill In

You might be wondering which values to use for these variables.

This depends on the SMTP server you plan to use.

<aside class="callout">
    <div class="icon">🔍</div>
    <div class="content">
        <p>A quick Google search should be sufficient.</p>
        <p><b>Example</b>: “SMTP settings for <i>SMTP Server Provider</i>.”</p>
    </div>
</aside>

---

For testing purposes, we will use [Mailtrap](https://mailtrap.io/).

It serves as a mock SMTP server, simulating an SMTP server without sending actual emails.

If you’d like to use it, simply create an account, set up a project with an inbox, and access its SMTP settings.

However, it’s important to note that in production, it is recommended to use a specialized SMTP server like Gmail, Amazon SES, etc.

### 4. Sending Your First Email

To send your first email, let’s start by creating a service class called `MailService`.

```java
@Service
public class MailService {
}
```

Now, let’s add the dependency for `JavaMailSender`, which is the Spring component responsible for sending emails.

```java
@Service
public class MailService {
    private final JavaMailSender mailSender;

    public MailService(final JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }
}
```

Next, we can implement the `send` method, which creates the email message and sends it.

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
        mailSender.send(mailMessage); // 6
    }
}
```

Let’s break down the method logic line by line:

1. Create an email message object.
2. Set the sender email (who is sending the email).
3. Set the recipient email.
4. Set the email subject.
5. Set the email body (content).
6. Send the email using `JavaMailSender`.

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>The email message object has numerous optional attributes you can configure. Experiment with these settings to better understand their behavior.</p>
    </div>
</aside>

### 5. Writing Emails with HTML

To send HTML emails, we need to make some adjustments to our `send` method. Here’s what needs to be done:

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
            mailSender.send(mailMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

Let’s break down the main changes:

1. To send an email with HTML, we need to create a special email message object: `MimeMessage`.
2. We also need to instantiate `MimeMessageHelper`, which is responsible for building the email message with HTML.
3. Finally, send the HTML text. Make sure to pass `true` as the second parameter to enable HTML rendering.

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>To create an email template, you can use Thymeleaf in conjunction with HTML email functionality. <a href="https://www.thymeleaf.org/doc/articles/springmail.html">Click here to learn more</a>.</p>
    </div>
</aside>

### 6. Attaching Files to Your Email

To attach a file, the setup is very similar to sending HTML texts. Let’s take a look:

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
            mailSender.send(mailMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

As we can see, only two lines were added. Let’s break them down:

1. Retrieve the file you want to attach. Adjust the file path according to your needs.
2. Specify the file’s name and attach it.

## Moral of the Story

In summary, learning to send emails with Spring Mail is essential for many applications.

Furthermore, its advanced features, such as HTML emails, file attachments, and email templates, can be leveraged to ensure effective communication with users.

I hope this text is helpful to you! Thank you for reading!