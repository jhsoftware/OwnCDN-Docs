---
Slug: what-is-owncdn
DocID: 2
---
# What is OwnCDN

OwnCDN is self-hosted **file/object storage**, **caching** and **image optimization** services - effectively your own CDN node.

Services can be chained together in any order to provide a powerful  system.
For example: Public HTTP Binding → Disk Cache → Image Optimization → Blob/object storage.

OwnCDN is configurable through a [web-based user interface](st_ui.md).

It has a simple [HTTP API](st_http_api.md) which also support Amazon S3 API syntax, making it compatible with a long list of software and services.


## File/object storage

Provide centralized file/object storage.

The [Storage service](st_storage.md) provides versioned and replicable storage (like [Amazon S3](https://aws.amazon.com/s3/)).

The [File System service](st_file_system.md) provides access to files in the local file system.

You can make store, retrieve, and delete files/object via the [HTTP API service](st_http_api.md) or provide public access to the files with the [Public HTTP Binding service](st_public_http_binding.md).


## Caching

Provide caching to bring files/objects closer to users, to serve files/object faster, and/or to reduce traffic to origin servers.

The [Memory Cache service](st_memory_cache.md) provides temporary caching for file/objects which are requested very frequently and/or need very fast delivery (like [Redis](https://redis.io/)).

The [Disk Cache service](st_disk_cache.md) provides temporary file/object caching - persisted to disk so that it survives server restarts.

You can configure the cache services to retrieve files from a remote web-server using the [HTTP Fetcher service](st_http_fetcher.md), or you can upload files via the [HTTP API service](st_http_api.md).

You can provide public access to the cached files with the [Public HTTP Binding service](st_public_http_binding.md).


## Image Optimization


The [Image Optimization service](st_image_optimizer.md) reduces image file size using and automatically scales and/or crop images.
