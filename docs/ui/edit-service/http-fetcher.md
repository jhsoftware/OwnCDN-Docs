---
id: SvcEditHttpFetcher
---
# UI / Edit Service - HTTP Fetcher

Use this page in the UI when creating / editing a [HTTP Fetcher service](../../service-types/http-fetcher.md).

<!--@include: ./.parts/id-name.md -->

## Source URL

The root of the URL to fetch files from (requested path will be appended to this).

## Cache Not-Found for

When the source responds with "not found", return the same result without consulting the source again for this amount of time. 

This is to avoid bombarding the source web-server with the same request over and other.

## Cache other errors for

When the source responds with another error (not "not found"), return the same result without consulting the source again for this amount of time.

This is to avoid bombarding the source web-server with the same request over and other.

<!--@include: ./.parts/update-button.md -->