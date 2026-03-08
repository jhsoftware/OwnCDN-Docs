---
Slug: ui-edit-service-storage
DocID: 25
---
# UI / Edit Service - Storage

Use this page in the UI when creating / editing a [Storage service](st_storage.md).

[#INCLUDE](parts/es_id_name.md)

## Replica

Check if this should be a continuously synchronized replica of a storage service on another OwnCDN instance.

You can only set this option while creating a new service. After this it is locked forever.

## Replication source 

(only visible when "Replica" is checked above)

Which Source (OwnCDN instance) this service should replicate from. 

Use [Replication sources](ui_replication_sources.md) to configure this list. 

## Replicate service ID

(only visible when "Replica" is checked above)

The service ID of the storage service to replication from on the Source.

[#INCLUDE](parts/es_case_sensitive.md)

> [!NOTE]
> If you intend to use the storage service with the S3 API, note that some applications / services expect the S3 storage API to be case-sensitive (enable this option). 


## Keep old versions

Whether to keep old file versions in the database and how long.

This affects how far back in time you can do a point-in-time restore - see [Command line options](cmdline.md).


[#INCLUDE](parts/es_update_button.md)

[#INCLUDE](parts/es_delete_button.md)
