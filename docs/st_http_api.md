---
Slug: http-api-service-type
DocID: 11
---
# HTTP API (service type)

The HTTP API service provides programmatic access to your OwnCDN instance - for example for uploading files from other applications.

For configuration options, see [UI /  Edit Service - HTTP API](es_http_api.md).

Two different API modes are supported - a primary JSON based mode ("standard mode"), and a more limited AWS S3 compatible XML based model ("S3 mode").

Some functionality of the standard mode is duplicated in the S3 mode.
However, the S3 mode is provided for S3 compatibility only, and does not offer all the of the functionality of the standard mode.

## Standard Mode

All HTTP requests to the HTTP API service with a `x-owncdn-key` header will be processed in standard mode.

For details, code example in many programming languages, and to try it out directly from your browser, see [HTTP API documentation](/docs-api/){target="_blank"}{nocheck}

### OpenAPI


You can get the [OwnCDN OpenAPI specification here](/docs-api/OwnCDN.openapi.json){target=_blank}{nocheck}.


### Authentication

A valid API key **value** (not the ID) must be specified in the `x-owncdn-key` HTTP request header.  
API keys can be configured in the UI - see [UI / API Keys](ui_api_keys.md).

Example:

```http
GET /servicelist HTTP/1.1
x-owncdn-key: ABCDEF...
...
```

> [!WARNING]  
> Because the API Key value is sent in clear text (in the `x-owncdn-key` header), requests should always be protected with an encryption layer such as SSL or VPN.

Each API key may have different access levels for each service.

The functions `uploadfile`, `deletefile`, and `flush` require "write" access. Other functions required "read" access.

### Service identification

All requests (except `servicelist`) to the HTTP API requires an `sid` parameter in the URL query string.  
This is a reference to the service ID.

Example:

```http
GET /getfile?sid=mystorage&path=file HTTP/1.1
...
```

### Functions

Standard mode supports the following functions:

- servicelist - Get a list of services.
- filelist - Get a list of files stored.
- getfile - Get a file.
- uploadfile - Upload a file.
- deletefile - Delete a file.
- flush - Flush all cached files.
- versionlist - Get a list of available versions of a file ([storage service](st_storage.md) only).
- syncnext - Get the next replication update  ([storage service](st_storage.md) only).
- reqlist - Get a list of the most recent requests.


## S3 Mode

All HTTP requests to the HTTP API service with a header key starting with `x-amz-` will be processed in S3 mode. 

### Addressing model

Amazon S3 has two "addressing models" - "path-style" or "virtual-hosted-style". 
See <https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html>

OwnCDN currently only supports the "path-style" addressing model, meaning that the "bucked id" (= service ID in OwnCDN), is the first part of the URL path (not part of the host name).

### Authentication

Amazon S3 / AWS offers various authentication methods / models.

OwnCDN only supports "AWS Signature Version 4" with "HTTP Authorization header" (not Query string parameters).
See <https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html>

### Supported "actions"

For root:
- ListBuckets

For "bucket":
- DeleteObjects
- GetBucketAcl
- GetBucketLocation (always "us-east-1")
- GetBucketVersioning ("Enabled" for "storage" service only)
- HeadBucket
- ListObjects
- ListObjectVersions

For object / file:
- CopyObject
- DeleteObject
- GetObjectTagging (always empty list)
- GetObjectAcl
- GetObject (only `versionId` parameter is used)
- HeadObject
- PutObject

For details see the <https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations_Amazon_Simple_Storage_Service.html>
