---
Slug: ui-edit-service-storage
DocID: 25
---
# UI / Edit Service - Storage

Use this page in the UI when creating / editing a [Storage service](st_storage.md).

[#INCLUDE](parts/es_id_name.md)

## Replica

Check if this should be a continuously synchronized replica of a storage service on another OwnCDN instance.

Only editable when creating a new service.

## Replication source 

(only visible when "Replica" is checked above)

Which Source (OwnCDN instance) this service should replicate from. 

Use [Replication sources](ui_replication_sources.md) to configure this list. 

## Replicate service ID

(only visible when "Replica" is checked above)

The service ID of the storage service to replication from on the Source.

## Case-sensitive

When checked, character upper/lower case in the file path, up to the query part (before `?`) , won't matter.

Only editable creating a new service.

## Keep old versions

Whether to keep old file versions in the database and how long.

This affects how far back in time you can do a point-in-time restore - see [Command line options](cmdline.md).


[#INCLUDE](parts/es_update_button.md)
