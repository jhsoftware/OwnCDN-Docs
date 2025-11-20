---
Slug: ui-edit-service-http-api
DocID: 33
---
# UI / Edit Service - HTTP API

Use this page in the UI when editing the [HTTP API service](st_http_api.md). 

## ID

The service ID. Always "api".

## Name

A descriptive name for the service. Always "HTTP API".

## Host name

> [!NOTE]
> The HTTP API service can use the same host name / port number as other HTTP services, because it also relies on HTTP headers ("x-owncdn-key" / "x-amz-...") to match requests.

The host name (domain name) that this service should process incoming HTTP requests for.
Specify `*` for any host name.


## Port number

The port number that this service should process incoming HTTP requests for.
Specify `*` for any port number.


## Enable CORS

Allow this service to be accessed by JavaScript (for example using `fetch()` and `XMLHttpRequest`) on web-sites served from  other domain names.

For more information on CORS, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS


[#INCLUDE](parts/es_update_button.md)
