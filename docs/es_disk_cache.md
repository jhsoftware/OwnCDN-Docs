---
Slug: ui-edit-service-disk-cache
DocID: 26
---
# UI / Edit Service - Disk Cache

Use this page in the UI when creating / editing a [Disk Cache service](st_disk_cache.md).

[#INCLUDE](parts/es_id_name.md)

[#INCLUDE](parts/es_case_sensitive.md)

[#INCLUDE](parts/es_source.md)

## Refresh from source

How often OwnCDN should check with the source to see if the file has been updated (will check after this time has passed, and the file is requested again). 

## Expire unused

Remove a file from the cache if it has not been requested again for the specified amount of time. 

A.k.a. "sliding expiration".

The expiration time of a file/object is reset each time it is requested.
This ensures that frequently requested items are kept in the cache providing faster responses, while infrequently accessed items are removed, freeing up space.


[#INCLUDE](parts/es_update_button.md)

[#INCLUDE](parts/es_delete_button.md)
