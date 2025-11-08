---
Slug: ui-http-binding-order
DocID: 35
---
# UI / HTTP Binding Order

This page lists [HTTP API](st_http_api.md), [HTTP UI](st_ui.md), and [Public HTTP Binding](st_public_http_binding.md) services in the order in which incoming HTTP requests are routed to them.

If there are more than 2 Public HTTP Binding services, the "Move" column will have arrow-up/down icons that you can click to re-order the services.

An incoming HTTP request will be routed to the first matching item in the list.

Note that an HTTP request will only be routed to the HTTP API if the requests contains an "x-owncdn-key" header (HTTP API standard mode), or a header key staring with "x-amz-" (HTTP API S3 mode).

By default, all other requests are routed to the HTTP UI.
In order to route requests to other ([Public HTTP Binding](st_public_http_binding.md)) services, you need to [configure the HTTP UI](es_ui.md) to use a specific host name or port number (different from the Public HTTP Binding services).


Click the "+ New Public HTTP Binding" button to create a new [Public HTTP Binding](st_public_http_binding.md) service.
