import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const CalendarWidget = Scrivito.provideWidgetClass("CalendarWidget", {
  attributes: {
    date: 'date',
    location: 'string',
    event: 'string',
  },
});

registerTextExtract("CalendarWidget", [
  { attribute: "event", type: "string" },
]);

export default CalendarWidget;
