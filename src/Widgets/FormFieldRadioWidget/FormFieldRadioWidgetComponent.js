import * as React from "react";
import ReactHtmlParser from 'react-html-parser';
import * as Scrivito from "scrivito";


Scrivito.provideComponent("FormFieldRadioWidget", ({ widget }) => {
    const name = widget.get("name");
    const label = widget.get("label");
    const required = widget.get("required") === "yes" ? true : false;
    const value = widget.get("value");

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                name={name}
                type="radio"
                required={required}
                value={value ? value : label}
            />
            {ReactHtmlParser(label)}
        </div>
    )
})

