# Storage (service type)

The Storage service is versioned file/object storage - supporting live replication to a remote OwnCDN instance.

"Versioned" means that it is possible to restore individual files to a previous version - including deleted files.  
It is also possible to restore the whole storage service to a specific earlier point in time. See the [Command line options](../misc/commandline.md) for details.

Live replication means that any file additions, updates, and deletions you make to on one OwnCDN instance can be instantly synchronized to another instance. This includes versions (see above), so that restoring old versions and point in time restore also works on the replica server.

To set up replication (on the "secondary" OwnCDN instance), you first create a [Replication source](../ui/replication-sources.md) with the URL of the [HTTP API](../service-types/http-api.md) and an [API Key](../ui/api-keys.md) value from the primary OwnCDN instance. Then create a new Storage service with the "Replica" setting checked, and using above Replication source. 

Files / objects are stored in a SQLite database file in WAL mode (very performant and provides safe database recovery after server crash).

Files / objects are stored in Brotli compressed format, for lower disk use and optimized CPU usage (each object only compressed once, rather than every request).

Large files (such as video) are automatically broken into and stored as smaller pieces to support video streaming / byte-range requests.

See [UI /  Edit Service - Storage](../ui/edit-service/storage.md) for configuration options.


