# Memory Cache (service type)

The Memory Cache service is used for temporarily storing files (in memory) so that they can be provided faster for subsequent requests.

The advantage of Memory Cache over [Disk Cache](disk-cache.md) is that serving files from memory is a lot faster than serving files from disk (of course, memory (RAM) is often more limited than disk space).

Use memory caching for files which are requested very frequently.

You can instantly purge (clear out) all the cached files/objects by clicking the "Purge" button in the [Service status](../ui/service-status/memory-cache.md) page.

See [UI /  Edit Service - Memory Cache](../ui/edit-service/memory-cache.md) for configuration options.
