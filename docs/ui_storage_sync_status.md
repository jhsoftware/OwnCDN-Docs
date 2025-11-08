---
Slug: ui-storage-sync-status
DocID: 36
---
# UI / Storage Sync Status

This page lists all [Storage services](st_storage.md) and their sync (replication) status.

For Storage services which are replicas, it shows the source, when it was last synchronized, and any errors encountered.

The "Last Sync ID" value for each Storage service is a numeric ID which is incremented with each update to the service (file addition, file update, file delete).

To manually verify that everything is up to date, you can compare this page on two OwnCDN instances, and check that the "Last Sync ID" matches for each Storage service.
