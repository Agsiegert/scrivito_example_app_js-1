const assetManifest = fetch("asset-manifest.json").then((response) =>
  response.json()
);

export default async function generateHtml({
  objId,
  htmlAttributes,
  headContent,
  bodyAttributes,
  bodyContent,
  preloadDumpFileName,
}) {
  const assets = await assetManifest;

  return `<!DOCTYPE html>
<html ${htmlAttributes}>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content="Scrivito by Infopark Group GmbH (scrivito.com)" />
    <meta name="trustpilot-one-time-domain-verification-id" content="4b90d68b-a822-49cb-8bd3-45f7da888928"/>
    ${headContent}
    <link rel="preconnect" href="https://api.scrivito.com" crossorigin />
    <link rel="preconnect" href="https://api.scrivito.com" />
    <link rel="preconnect" href="https://cdn0.scrvt.com" />
    <link rel="stylesheet" href="${assets["index.css"]}" />
    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"></script>
    <script src="/js_snippets_head.js"></script>
  </head>
  <body ${bodyAttributes}>
    <div id="application" data-scrivito-prerendering-obj-id="${objId}">${bodyContent}</div>
    <script src="${preloadDumpFileName}"></script>
    <script async src="${assets["index.js"]}"></script>
    <script src="/js_snippets_before_body_end.js"></script>
  </body>
</html>
`;
}
