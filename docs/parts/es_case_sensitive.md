## Case-sensitive

When checked (case-sensitive), files/objects are stored under the exact path and query as provided when the item was uploaded/retrieved.
Requests for a file/object must match the path and query exactly, including letter casing (uppper/lower case).

When NOT checked (not case-sensitive), files/objects are stored with the path (before ?) converted to lower case letters, while the query part (after ?) is kept as originally provided.
The same if done for incoming requests, so that requests for file/object will match without regard to letter casing in the path (before ?), while the query part (after ?) still must match letter casing.

This also affects how files/objects are listed (for example, in the HTTP API "File list"). The files/objects paths are listed as stored (see above).

You can only set this option while creating a new service. After this it is locked forever.
