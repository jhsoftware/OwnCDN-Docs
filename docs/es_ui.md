---
Slug: ui-edit-service-http-ui
DocID: 32
---
# UI / Edit Service - HTTP UI

Use this page in the UI when editing the [HTTP UI service](st_ui.md).

## ID

The service ID. Must be unique for each service.

Used as the `sid` query parameter in [HTTP API](st_http_api.md) requests.

Always "UI" for the HTTP API service.

## Name

A descriptive name for the service.

## Host name

The host name (domain name) that this service should process incoming HTTP requests for.
Specify `*` for any host name.

## Port number

The port number that this service should process incoming HTTP requests for.
Specify `*` for any port number.


[#INCLUDE](parts/es_update_button.md)
