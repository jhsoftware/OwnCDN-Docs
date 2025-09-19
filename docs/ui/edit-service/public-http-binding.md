---
id: SvcEditPublicHttp
---
# UI / Edit Service - Public HTTP Binding

Use this page in the UI when creating / editing a [Public HTTP Binding service](../../service-types/public-http-binding.md).

<!--@include: ./.parts/id-name.md -->

## Host name

The host name (domain name) that this service should process incoming HTTP requests for.
Specify `*` for any host name.

## Port number

The port number that this service should process incoming HTTP requests for.
Specify `*` for any port number.

## Path prefix

First part of URL path that this service should process incoming HTTP requests for (blank or `/` for any).

Only full path segments / "directories" (between two `/` characters) allowed.

This prefix will be removed from the path requested from the source service (see below).

For example, if the incoming request is for `http://example.com/images/products/laptop123.png` and this setting (Path prefix) is `/images/`, the path requested from the source service will be `products/laptop123.png`.

## Enable CORS

Allow this service to be accessed by JavaScript (for example using `fetch()` and `XMLHttpRequest`) on web-sites served from  other domain names.

For more information on CORS, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

## Remove URL query

When enabled, any query string in the requested path, will be removed from the path requested from the source service (see below).

For example, if this setting is checked and the incoming request is for `http://example.com/products?id=123`, the path requested from the source service will be `products`.

## Append 'webp' to URL

When enabled, the path requested from the source service (see below) will be appended a `webp=1` or `webp=0` querystring, depending on whether the incoming HTTP request's `Accept` header includes the value `image/webp`.

For example, if this setting is checked and the incoming request is for `http://example.com/image.jpg` and the request includes the header `Accept: image/webp ...`, the path requested from the source service will be `image.jpg?webp=1`.

This is especially useful if the source service (or a source service further down the chain) is an [Image optimizer](../../service-types/image-optimizer.md) service. 
When the Image optimizer service sees the `webp=1` querystring, it will attempt to compress the image using WebP, which is often produces a smaller file than jpeg, png, etc. 

## Client cache time

Specify how long the browser may cache the response.  
(HTTP response `Cache-Control` header is set to `public, max-age=<this-value>`)

<!--@include: ./.parts/source.md -->

<!--@include: ./.parts/update-button.md -->