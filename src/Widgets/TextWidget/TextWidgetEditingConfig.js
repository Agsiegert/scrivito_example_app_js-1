import * as Scrivito from "scrivito";
import textWidgetIcon from "../../assets/images/text_widget.svg";

Scrivito.provideEditingConfig("TextWidget", {
  title: "Text",
  thumbnail: textWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    text: {
      title: "Text",
      description: "The actual source code of this text",
    },
  },
  properties: ["alignment", "text"],
  initialContent: {
    alignment: "left",
  },
  validations: [
    [
      "text",
      html => {
        const problem = html.match(/[^.!?,;:]([.!?,;:][”’])[^.!?,;:]/);
        if (problem) {
          return {
            severity: "warning",
            message: `The text contains punctuation before closing quotes. We put punctuation after the closing quote. Please use ${problem[1]
              .split("")
              .reverse()
              .join("")} instead of ${problem[1]}`,
          };
        }
      },
    ],
    [
      "text",
      html =>
        (html.match(/\(\s|\s\)/)
          ? {
              severity: "warning",
              message:
                "Please remove inner space next to parantheses. The should be no space after opening, and no space before closing parentheses (like in this example).",
            }
          : undefined),
    ],
    [
      "text",
      html => {
        const problem = html
          .replace(/<code>.+?<\/code>/g, "")
          .match(/(^|>)[^<]*"([^<>"]+?)"[^>]*(<|$)/);
        if (problem) {
          return {
            severity: "warning",
            message: `The text contains “${
              problem[2]
            }” in straight quotes. Curly quotes are the quotation marks used in good typography. Consider using “${
              problem[2]
            }” or ‘${problem[2]}’.`,
          };
        }
      },
    ],
    [
      "text",
      html =>
        (html.match(/(^|\s)&nbsp;|&nbsp;(\s|$)/g)
          ? {
              severity: "warning",
              message: "Please remove non-breaking space followed by space. Otherwise, the rendered text may display in an unexpected way. Consider using the space widget for vertical spacing.",
            }
          : undefined),
    ],
    [
      "text",
      html =>
        (html.match(/<(p|div)>&nbsp;/)
          ? "Please remove leading non-breaking space from paragraphs. Paragraphs should not be indented."
          : undefined),
    ],
    [
      "text",
      html =>
        (html.match(/&nbsp;<(br|\/div|\/p)/)
          ? {
              severity: "warning",
              message: "Please remove trailing non-breaking space from paragraphs. Paragraphs should not end with whitespace.",
            }
          : undefined),
    ],
  ],
});
