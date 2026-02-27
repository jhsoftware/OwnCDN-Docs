---
Slug: memory-cache-service-type
DocID: 5
---
# Memory Cache (service type)

The Memory Cache service is used for temporarily storing files/objects (in memory) so that they can be provided faster for subsequent requests.

The advantage of Memory Cache over [Disk Cache](st_disk_cache.md) is that serving files/objects from memory is a lot faster than serving from disk (of course, memory (RAM) is often more limited than disk space).

Use memory caching for files/ objects which are requested very frequently.

You can instantly purge (clear out) all the cached files/objects by clicking the "Purge" button on the [Service status](ss_memory_cache.md) page.

See [UI / Edit Service - Memory Cache](es_memory_cache.md) for configuration options.
