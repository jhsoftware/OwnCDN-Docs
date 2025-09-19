---
id: SvcEditDiskCache
---
# UI / Edit Service - Disk Cache

Use this page in the UI when creating / editing a [Disk Cache service](../../service-types/disk-cache.md).

<!--@include: ./.parts/id-name.md -->

## Case-sensitive

When checked, character upper/lower case in the file path, up to the query part (before `?`) , won't matter.

Only editable creating a new service.

<!--@include: ./.parts/source.md -->

## Refresh from source

How often OwnCDN should check with the source to see if the file has been updated (will check after this time has passed, and the file is requested again). 

## Expire unused

Remove the file from the cache if it has not been requested again for the specified amount of time. 


<!--@include: ./.parts/update-button.md -->

