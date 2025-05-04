A webhook is a form of communication between systems using *callbacks*.

These *callbacks* are HTTP endpoints provided by an application, acting as event *listeners*.

This enables real-time communication between systems without the need for polling.

## In Detail

Imagine a scenario where an application wants to be notified whenever a purchase is made on an e-commerce platform.

To enable this communication via webhooks, the following steps are required:

1. The e-commerce platform must provide an endpoint (or any other means) allowing the application to register a URL to be used as a webhook.

2. The application must configure the webhook URL (the endpoint that will be called when the event occurs).

3. Upon successfully processing a purchase, the e-commerce platform uses the provided URL to send an HTTP request with the new purchase data.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    It’s common for the HTTP method used in the request to be `POST`. However, this method may vary depending on the implementation.
  </div>
</aside>

## General Overview

Suppose the e-commerce platform provides the following endpoint for webhook configuration:

- `https://ecommerce.com/v1/webhooks/register`.

The client application can send a POST request to this endpoint with the webhook URL, as shown below:

```bash
POST /v1/webhooks/register HTTP/1.1
Host: ecommerce.com
Content-Type: application/json

{
  "webhook_url": "https://application.com/v1/new-purchase"
}
```

When a purchase is made, the e-commerce platform will send a request to the configured URL:

```bash
POST /v1/new-purchase HTTP/1.1
Host: application.com
Content-Type: application/json
Authorization: Bearer x.y.z

{
  "event": {
    "id": "54520505-be85-40c8-a575-0ec33908f1a8",
    "value": 50.75
  },
  "date": "2024-06-30T12:34:56Z"
}
```

## Stay Alert

It’s important to implement authentication and data validation to ensure secure communication via webhooks.

When sending a webhook, the application typically expects some layers of protection.

For example, a token in the request headers containing the signature of the sent payload, ensuring trust between the source and the destination.

## Moral of the Story

As we can see, despite being a simple concept, a webhook is a powerful strategy for real-time notifications between applications, saving resources and reducing communication complexity.

Thank you very much for reading, and see you soon! 👋

## Go Deeper

- <https://www.redhat.com/en/topics/automation/what-is-a-webhook>
- <https://progrium.github.io/blog/2007/05/03/web-hooks-to-revolutionize-the-web>