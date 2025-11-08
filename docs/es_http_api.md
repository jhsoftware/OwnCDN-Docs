---
Slug: ui-edit-service-http-api
DocID: 33
---
# UI / Edit Service - HTTP API

Use this page in the UI when editing the [HTTP API service](st_http_api.md). 

## ID

The service ID. Must be unique for each service.

Used as the `sid` query parameter in [HTTP API](st_http_api.md) requests.

Always "api" for the HTTP API service.

## Name

A descriptive name for the service.

## Host name

The host name (domain name) that this service should process incoming HTTP requests for.
Specify `*` for any host name.

> [!NOTE]
> The HTTP API service will also process incoming requests for the host name / port number specified for the [HTTP UI](st_ui.md) service.

## Port number

The port number that this service should process incoming HTTP requests for.
Specify `*` for any port number.

> [!NOTE]
> The HTTP API service will also process incoming requests for the host name / port number specified for the [HTTP UI](st_ui.md) service.

## Enable CORS

Allow this service to be accessed by JavaScript (for example using `fetch()` and `XMLHttpRequest`) on web-sites served from  other domain names.

For more information on CORS, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS


[#INCLUDE](parts/es_update_button.md)
