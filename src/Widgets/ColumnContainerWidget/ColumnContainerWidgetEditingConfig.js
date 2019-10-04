import * as Scrivito from "scrivito";
import columnContainerWidgetIcon from "../../assets/images/column_container_widget.svg";
import ColumnWidget from "../ColumnWidget/ColumnWidgetClass";

Scrivito.provideEditingConfig("ColumnContainerWidget", {
  title: "Columns",
  thumbnail: columnContainerWidgetIcon,
  propertiesGroups: [
    {
      title: "Columns layout",
      component: "ColumnsEditorTab",
    },
  ],
  initialContent: {
    columns: [
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
    ],
    alignment: "start",
  },
  validations: [
      widget => {
        const columns = widget.get("columns");
        for (var i = 0; i < columns.length; ++i) {
          const column = columns[i].get("content");
          if (!column || !column.length) {
            return {
              message: "Columns should not be left empty.",
              severity: "info",
            };
          }
        }
      },
    ],
});
