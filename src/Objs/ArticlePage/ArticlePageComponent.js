import * as React from "react";
import * as Scrivito from "scrivito";

import "./ArticlePage.scss";

Scrivito.provideComponent("ArticlePage", ({ page }) => (
  <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Article title: </h3>
            <Scrivito.ContentTag
              content={page}
              attribute="title"
              tag="h1"
              className="border"
            />
          </div>
          <div className="col-12">
            <h3>Article headline: </h3>
            <Scrivito.ContentTag
              content={page}
              attribute="headline"
              tag="h2"
              className="border"
            />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-sm-6">
            <h3>Article image 1: </h3>
            <Scrivito.ImageTag
              content={ page }
              attribute="image"
              className="img-responsive"
              alt={ page.get('title') }
            />
          </div>
          <div className="col-sm-6">
            <h3>Article image 2: </h3>
              <Scrivito.ImageTag
                content={ page }
                attribute="image2"
                className="img-responsive"
                alt={ page.get('title') }
              />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Article body: </h3>
            <Scrivito.ContentTag
              content={page}
              attribute="body"
            />
          </div>
        </div>
      </div>
    </section>
));
