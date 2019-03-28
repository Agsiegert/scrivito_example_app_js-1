function dataFromAddressWidget(addressWidget) {
  return {
    "@type": "Place",
    name: "",
    address: "",
    telephone: "",
    faxNumber: "",
  };
}

function addressFromAddressWidget(addressWidget) {
  return {
    "@type": "PostalAddress",
    streetAddress: addressWidget.get("locationStreetAddress"),
    addressLocality: addressWidget.get("locationLocality"),
    addressRegion: addressWidget.get("locationRegion"),
    postalCode: addressWidget.get("locationPostalCode"),
    addressCountry: addressWidget.get("locationCountry"),
  };
}

export default dataFromAddressWidget;
