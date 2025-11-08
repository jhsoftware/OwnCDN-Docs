---
Slug: image-optimizer-service-type
DocID: 8
---
# Image Optimizer (service type)

The Image Optimizer service is used to reduce image file size using WebP or JPEG compression, and to automatically scale and/or crop images (size / crop specified in URL query, or fixed maximum width).

See [UI /  Edit Service - Image Optimizer](es_image_optimizer.md) for configuration options.

## Compression

The Image Optimizer service will attempt to compress all images using WebP or JPEG compression.
It will of course only serve the compressed image if this is actually smaller (in bytes) than the original.

To enable WebP compression, include `webp=1` in the URL query parameters.  
The [Public HTTP Binding service](st_public_http_binding.md) has a setting to automatically append this (`webp=1`) to the URL query path if the incoming HTTP request indicates support for WebP. 

Use the "Quality %" setting to control quality of compressed images (both WebP and JPEG) - see [UI /  Edit Service - Image Optimizer](es_image_optimizer.md).

## Resizing

Specify target width and optionally height in the URL query parameters `w` and `h` (pixel values).  
For example `house.jpg?w=500&h=200`.

You can also configure a fixed Maximum Width - see [UI /  Edit Service - Image Optimizer](es_image_optimizer.md).

## Cropping

To enable cropping, include `c=1` in the URL query parameters.  
For example `house.jpg?w=500&h=200&c=1`.

If the scaled image does not fit the `w`/`h` aspect ratio:
- With cropping enabled, it will be cropped to fit, so that only the middle part remains. 
- Without cropping, it will be scaled so that neither width nor height is more than `w`/`h`.
