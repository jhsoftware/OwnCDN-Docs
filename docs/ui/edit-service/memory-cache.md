---
id: SvcEditMemCache
---
# UI / Edit Service - Memory Cache

Use this page in the UI when creating / editing a [Memory Cache service](../../service-types/memory-cache.md).

<!--@include: ./.parts/id-name.md -->

## Case-sensitive

When checked, character upper/lower case in the file path, up to the query part (before `?`) , won't matter.

Only editable creating a new service.

<!--@include: ./.parts/source.md -->

## Refresh from source

How often OwnCDN should check with the source to see if the file has been updated (will check after this time has passed, and the file is requested again).

## Expire not-found 

When the source responds with "not found", return the same result without consulting the source again for this amount of time.

This is to avoid bombarding the source service with the same request over and over.

## Expire errors 

When the source responds with another error (not "not found"), return the same result without consulting the source again for this amount of time.

This is to avoid bombarding the source service with the same request over and over.


## Expire unused 

Remove the file from the cache if it has not been requested again for this amount of time.


## Max. item size

The maximum size of individual items in the cache.
Items larger than this will just be passed through and will not be stored in the cache.


## Max. memory usage

The approximate maximum amount of memory / RAM that the service should use to store files.

When this limit is reached, the files that have not been requested the longest, are evicted to make room for new files.


<!--@include: ./.parts/update-button.md -->