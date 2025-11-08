---
Slug: command-line-options
DocID: 43
---
# Command line options (point-in-time restore)

`owncdn.exe` (found in the directory where OwnCDN is installed) is both the main program executable, as well as a command line utility.

It can be used to list and reverse the latest changes (restore to a specific point-in-time) for an OwnCDN [Storage service](st_storage.md) database.

## To list changes: 

`owncdn.exe  log  database-file  [fromid:<id>]  [fromtime:<YYYYMMDDHHMMSS>]  [count:<number>]  [forward]`

Where: 
- **fromid:** The starting change ID (optional, defaults to the first/latest)
- **fromtime:** The starting change time (optional)
- **count:** The number of changes to list (optional, defaults to 25)
- **forward:** List changes in forward chronological order (default is reverse chronological order)

Example:  
`owncdn.exe  log  mystorage.db  fromid:123`


## To reverse changes:

`owncdn.exe  rewind  database-file  [toid:<number>]  [totime:<YYYYMMDDHHMMSS>]`

Where:
- **toid:** Reverse changes back to this ID (leaving the change with this ID and changes before it be)
- **totime:** Reverse changes back to this time (leaving the changes at this exact time and changes before it be)

Example:  
`owncdn.exe  rewind  mystorage.db  toid:123`

> [!IMPORTANT]
> Make sure to shut down OwnCDN before running this command as it needs exclusive access to the database file.

> [!WARNING]
> Using this command will permanently delete data from the database file, so make sure to back it up first.
