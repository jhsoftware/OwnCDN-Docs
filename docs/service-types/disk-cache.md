# Disk Cache (service type)

The Disk Cache service is used for temporarily storing files/objects (on disk) so that they can be provided faster for subsequent requests.

The advantage of Disk Cache over [Memory Cache](memory-cache.md) is that with Disk Cache, files are stored to disk, and therefore will survive a server or program restart.

Files / objects are stored in a SQLite database file in WAL mode (very performant and provides safe database recovery after server crash).

Files / objects are stored in Brotli compressed format, for lower disk use and optimized CPU usage (each object only compressed once, rather than every request).

You can instantly purge (clear out) all the cached files/objects by clicking the "Purge" button in the [Service status](../ui/service-status/disk-cache.md) page.

See [UI /  Edit Service - Disk Cache](../ui/edit-service/disk-cache.md) for configuration options.
