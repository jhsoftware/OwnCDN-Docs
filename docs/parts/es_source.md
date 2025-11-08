## Source

The service from which files should be provided.

## Source path

If not blank, this will be prepended to the path requested from the source service (see above).

Only full path segments / "directories" (between two `/` characters) allowed.

For example, if the incoming request is for `http://example.com/images/products/laptop123.png` and Path prefix (see above) is `/images/` and this setting (Source path) is `pictures/`, the path requested from the source service will be `pictures/products/laptop123.png`.
(`/images/` is removed and `pictures/` is prepended). 
