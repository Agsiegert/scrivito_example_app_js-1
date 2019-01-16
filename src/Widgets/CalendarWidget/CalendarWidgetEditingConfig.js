import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CalendarWidget", {
  title: "Calendar",
  attributes: {
    date: {
      title: 'Date',
      description: 'When will the event take place?',
    },
    location: {
      title: 'Location',
      description: 'Where does the event take place?',
    },
    event: {
      title: 'Event',
      description: 'What is it all about?',
    },
  },
  properties: ["date", "location", "event"],
  initialContent: {
    event: "Lorem Ipsum",
  },
});
