import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ThumbnailGalleryImageWidget", {
  title: "Thumbnail Gallery Image",
  attributes: {
    image: {
      title: "Image",
    },
    title: {
      title: "Title",
    },
    subtitle: {
      title: "Subtitle",
    },
    tags: {
      title: "Tags",
    },
    link: {
      title: "Link (optional)",
      description: "The page to open after clicking the image.",
    },
  },
  properties: ["image", "title", "subtitle", "tags", "link"],
  titleForContent: widget =>
    `${widget.get("title")} - ${widget.get("subtitle")}`,
});
