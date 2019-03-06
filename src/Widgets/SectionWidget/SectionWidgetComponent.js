import * as React from "react";
import * as Scrivito from "scrivito";
import TrackVisibility from "react-on-screen";
import { textExtractFromWidgetlist } from "../../utils/textExtract";

Scrivito.provideComponent("SectionWidget", ({ widget }) => {
  const sectionClassNames = [];

  const sectionStyle = {};

  const parallax = widget.get('parallaxEffect')

  let backgroundColor = widget.get("backgroundColor") || "white";

  const backgroundImage = widget.get("backgroundImage");
  if (backgroundImage) {
    backgroundColor = "dark-image";
    sectionStyle.background = [
      {
        image: "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
      },
      { image: backgroundImage },
    ];
  } 

  sectionClassNames.push(`bg-${backgroundColor}`);

  if (parallax === "yes") {
    sectionClassNames.push("parallax");
  }

  if (widget.get("showPadding") === "no") {
    sectionClassNames.push("no-padding");
  }

  let contentClassNames = ["container"];

  if (widget.get("useFullWidth") === "yes") {
    contentClassNames = ["container-fluid gutter0"];
  }

  if (widget.get("useFullHeight") === "yes") {
    sectionClassNames.push("full-height");
  }

  const sectionClassName = sectionClassNames.join(" ");
  const contentClassName = contentClassNames.join(" ");

  const section = (
    <Scrivito.BackgroundImageTag
      tag="section"
      className={sectionClassName}
      style={sectionStyle}
    >
      <Scrivito.ContentTag
        className={contentClassName}
        content={widget}
        attribute="content"
      />
    </Scrivito.BackgroundImageTag>
  );

  if (widget.get("deferVisibility") === "no") {
    return section;
  }

  return (
    <DeferredVisibility visible={section}>
      <div className={sectionClassName}>
        <p className={contentClassName}>
          {textExtractFromWidgetlist(widget.get("content"))}
        </p>
      </div>
    </DeferredVisibility>
  );
});

const DeferredVisibility = ({ children, visible }) => (
  <TrackVisibility once partialVisibility offset={1200}>
    {({ isVisible }) => (isVisible ? visible : children)}
  </TrackVisibility>
);
