---
Slug: ui-edit-service-image-optimizer
DocID: 30
---
# UI / Edit Service - Image Optimizer

Use this page in the UI when creating / editing an [Image Optimizer service](st_image_optimizer.md).

[#INCLUDE](parts/es_id_name.md)

[#INCLUDE](parts/es_source.md)


> [!NOTE]
> The Image Optimizer service will only process files with content types `image/jpeg`, `image/gif`, `image/png`, `image/webp`.  
> All other files will be passed through unaltered.

> [!IMPORTANT]
> The Image Optimizer server will also remove any query (anything from question mark (`?`) and forward) from the source path.  
> This is because the query parameters will typically be used for image generation. See [Image Optimizer service](st_image_optimizer.md) for more on this.

## Max width

Images wider than this value (in pixels) will be resized to fit. 

## Quality %

Image quality of compressed (JPEG and WebP) images.


[#INCLUDE](parts/es_update_button.md)
