import * as React from "react";
import * as Scrivito from "scrivito";
import Lightbox from "react-images";
import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import TagList from "../../Components/TagList";
import isImage from "../../utils/isImage";

class ThumbnailGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTag: "",
    };
  }

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const images = widget
      .get("images")
      .filter(subWidget => isImage(subWidget.get("image")));

    if (!images.length) {
      return (
        <InPlaceEditingPlaceholder center>
          Select images in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div>
        <TagList
          showTags={widget.get("showTags") === "yes"}
          tags={allTags(images)}
          currentTag={this.state.currentTag}
          setTag={this.setTag}
        />
        <div>
          <div className="row gallery-box-wrapper">
            {images.map((image, imageIndex) => (
              <Thumbnail
                key={image.id()}
                widget={image}
                currentTag={this.state.currentTag}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("ThumbnailGalleryWidget", ThumbnailGalleryComponent);

const Thumbnail = Scrivito.connect(({ widget, openLightbox, currentTag }) => {
  const title = widget.get("title");
  const subtitle = widget.get("subtitle");
  const image = widget.get("image");
  const tags = widget.get("tags");
  const link = widget.get("link");

  const classNames = [
    "col-md-3",
    "col-sm-4",
    "col-6",
    "gallery-box",
    "gutter0",
  ];
  if (currentTag && !tags.includes(currentTag)) {
    classNames.push("squeezed");
  }

  return (
    <div className={classNames.join(" ")}>
        <Scrivito.BackgroundImageTag
          className="gallery-box-image"
          style={{ background: { image } }}
        />
      <Scrivito.LinkTag to={link} className="gallery-box-content-wrapper">
        <span className="gallery-box-content">
          <i className="fa fa-camera" aria-hidden="true" />
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </span>
      </Scrivito.LinkTag>
    </div>
  );
});

function allTags(images) {
  const tagsArray = images.map(image => image.get("tags"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort();
}
