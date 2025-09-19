---
id: SvcEditUI
---
# UI / Edit Service - HTTP UI

Use this page in the UI when editing the [HTTP UI service](../../service-types/ui.md).

## ID

The service ID. Must be unique for each service.

Used as the `sid` query parameter in [HTTP API](../../service-types/http-api.md) requests.

Always "UI" for the HTTP API service.

## Name

A descriptive name for the service.

## Host name

The host name (domain name) that this service should process incoming HTTP requests for.
Specify `*` for any host name.

## Port number

The port number that this service should process incoming HTTP requests for.
Specify `*` for any port number.


<!--@include: ./.parts/update-button.md -->