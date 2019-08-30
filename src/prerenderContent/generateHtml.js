export default function generateHtml({
  objId,
  htmlAttributes,
  headContent,
  bodyAttributes,
  bodyContent,
  preloadDumpFileName,
}) {
  return `<!DOCTYPE html>
<html ${htmlAttributes}>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content="Scrivito by Infopark AG (scrivito.com)" />
    ${headContent}
    <link rel="preconnect" href="https://api.scrivito.com" crossorigin />
    <link rel="preconnect" href="https://api.scrivito.com" />
    <link rel="preload" href="/index.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/index.css"></noscript>
    <style type="text/css">
      .divider-widget {
          clear: both;
          position: relative;
          padding: 60px 0;
          text-align: center;
          height: 0
      }

      .divider-widget:after {
          background: #666;
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: block;
          height: 1px
      }
      :root {
          --blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#5198f3;--secondary:#b1b1b1;--success:#5cb85c;--info:#5bc0de;--warning:#f0ad4e;--danger:#d9534f;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}

      *,:after,:before {
          box-sizing: border-box
      }

      html {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: rgba(0,0,0,0)
      }
      article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section {
          display: block
      }

      body {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
          font-size: 1rem;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff
      }
      h1,h2,h3,h4,h5,h6 {
          margin-top: 0;
          margin-bottom: .5rem
      }

      p {
          margin-top: 0;
          margin-bottom: 1rem
      }
      address,dl,ol,ul {
          margin-bottom: 1rem
      }

      dl,ol,ul {
          margin-top: 0
      }

      ol ol,ol ul,ul ol,ul ul {
          margin-bottom: 0
      }
      a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects
      }
      a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
          color: inherit;
          text-decoration: none
      }
      img {
          vertical-align: middle;
          border-style: none
      }
      button {
          border-radius: 0
      }
      button,input,optgroup,select,textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit
      }

      button,input {
          overflow: visible
      }

      button,select {
          text-transform: none
      }

      [type=reset],[type=submit],button,html [type=button] {
          -webkit-appearance: button
      }
      .h1,.h2,.h3,.h4,.h5,.h6,.timeline>li.timeline-divider time,h1,h2,h3,h4,h5,h6 {
          margin-bottom: .5rem;
          font-family: inherit;
          font-weight: 500;
          line-height: 1.2;
          color: inherit
      }

      .h1,h1 {
          font-size: 2.5rem
      }

      .h2,h2 {
          font-size: 2rem
      }

      .h3,h3 {
          font-size: 1.75rem
      }
      .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto
      }
      @media (min-width: 576px) {
          .container {
              max-width:540px
          }
      }

      @media (min-width: 768px) {
          .container {
              max-width:720px
          }
      }

      @media (min-width: 992px) {
          .container {
              max-width:960px
          }
      }

      @media (min-width: 1200px) {
          .container {
              max-width:1140px
          }
      }

      .container-fluid {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto
      }

      .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px
      }
      .col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto {
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px
      }
      .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%
      }
      .form-control {
          display: block;
          width: 100%;
          padding: .375rem .75rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0;
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
      }
      .form-control::placeholder {
          color: #6c757d;
          opacity: 1
      }
      .btn {
          display: inline-block;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
          user-select: none;
          border: 1px solid transparent;
          padding: .375rem .75rem;
          font-size: 1rem;
          line-height: 1.5;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
      }
      .btn-primary {
          color: #fff;
          background-color: #5198f3;
          border-color: #5198f3
      }
      .collapse {
          display: none
      }
      .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          display: none;
          float: left;
          min-width: 10rem;
          padding: .5rem 0;
          margin: .125rem 0 0;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0,0,0,.15);
          border-radius: 0
      }
      .input-group {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%
      }

      .input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control {
          position: relative;
          flex: 1 1 auto;
          width: 1%;
          margin-bottom: 0
      }
      .input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0
      }
      .nav {
          display: flex;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none
      }

      .nav-link {
          display: block;
          padding: .5rem 1rem
      }
      .navbar {
          position: relative;
          padding: .5rem 1rem
      }

      .navbar,.navbar>.container,.navbar>.container-fluid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between
      }

      .navbar-brand {
          display: inline-block;
          padding-top: .3125rem;
          padding-bottom: .3125rem;
          margin-right: 1rem;
          font-size: 1.25rem;
          line-height: inherit;
          white-space: nowrap
      }
      .navbar-nav {
          display: flex;
          flex-direction: column;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none
      }

      .navbar-nav .nav-link {
          padding-right: 0;
          padding-left: 0
      }

      .navbar-nav .dropdown-menu {
          position: static;
          float: none
      }
      .navbar-collapse {
          flex-basis: 100%;
          flex-grow: 1;
          align-items: center
      }

      .navbar-toggler {
          padding: .25rem .75rem;
          font-size: 1.25rem;
          line-height: 1;
          background-color: transparent;
          border: 1px solid transparent
      }
      .navbar-toggler:not(:disabled):not(.disabled) {
          cursor: pointer
      }
      @media (min-width: 992px) {
        .navbar-expand-lg {
            flex-flow:row nowrap;
            justify-content: flex-start
        }

        .navbar-expand-lg .navbar-nav {
            flex-direction: row
        }

        .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute
        }

        .navbar-expand-lg .navbar-nav .nav-link {
            padding-right: .5rem;
            padding-left: .5rem
        }

        .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
            flex-wrap: nowrap
        }

        .navbar-expand-lg .navbar-collapse {
            display: flex!important;
            flex-basis: auto
        }

        .navbar-expand-lg .navbar-toggler {
            display: none
        }
      }
      .align-items-start {
          align-items: flex-start!important
      }
      .fixed-top {
          top: 0
      }

      .fixed-bottom,.fixed-top {
          position: fixed;
          right: 0;
          left: 0;
          z-index: 1030
      }
      .h-100,.row.align-items-stretch .card:only-of-type {
          height: 100%!important
      }
      .text-left {
          text-align: left!important
      }
      .text-center {
          text-align: center!important
      }
      .navbar-brand,.text-hide {
          font: 0/0 a;
          color: transparent;
          text-shadow: none;
          background-color: transparent;
          border: 0
      }
      .fa {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
      }
      .fa-search:before {
          content: ""
      }
      .fa-times-circle:before {
          content: ""
      }
      .fa-angle-right:before {
          content: ""
      }
      .fa-angle-down:before {
          content: ""
      }
      .gutter0 {
          padding-left: 0;
          padding-right: 0
      }
      html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
      }
      body {
          font-family: Source Sans Pro,sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5em;
          color: #716f73;
          background: transparent
      }

      .container,.container-fluid {
          position: relative
      }
      a {
          color: #5198f3;
          text-decoration: none
      }
      p {
          margin: 0 0 25px
      }

      .h1,.h2,.h3,.h4,.h5,.h6,.timeline>li.timeline-divider time,h1,h2,h3,h4,h5,h6 {
          font-family: PT Sans Narrow,sans-serif;
          font-weight: 400;
          color: #393e46;
          margin: 0 0 15px;
          padding: 0;
          line-height: 1.5
      }

      .h1,h1 {
          font-size: 60px;
          line-height: 70px
      }

      .h2,h2 {
          font-size: 42px;
          line-height: 50px
      }

      .h3,h3 {
          font-size: 30px;
          line-height: 40px
      }
      .b-bottom {
          display: block;
          position: relative;
          padding: 10px 0 20px
      }

      .b-bottom:after {
          content: "";
          display: block;
          position: absolute;
          bottom: 10px;
          left: 50%;
          margin: 0 0 0 -20px;
          width: 40px;
          height: 1px;
          background: hsla(0,0%,43.5%,.2)
      }
      .text-left.b-bottom:after {
          left: 0;
          margin: 0
      }
      ol,ul {
          margin-bottom: 5px;
          margin-top: 5px
      }

      ul {
          padding-left: 20px
      }

      .img-fluid,img {
          margin: 0 0 25px;
          max-width: 100%
      }
      .no-padding {
          padding: 0!important
      }
      .fa {
          color: #b1b1b1
      }
      .btn {
          border-radius: 0;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 13px 20px 10px;
          margin: 0 0 10px
      }

      .btn,.btn .fa {
          vertical-align: middle
      }

      .btn .fa {
          padding: 0 0 3px 15px;
          font-size: 26px
      }

      .btn-danger,.btn-danger .fa,.btn-info,.btn-info .fa,.btn-primary,.btn-primary .fa,.btn-secondary,.btn-secondary .fa,.btn-success,.btn-success .fa,.btn-warning,.btn-warning .fa {
          color: #fff
      }
      .btn-white-transparent {
          background: hsla(0,0%,100%,.1);
          color: #b1b1b1
      }
      .btn-round {
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center
      }

      .btn-round i {
          font-size: 33px;
          line-height: 50px
      }
      .bg-dark-image .btn-round {
          position: absolute;
          bottom: 30px;
          left: 50%;
          margin: 0 0 0 -25px
      }
      .bg-brand-primary,.bg-brand-secondary,.bg-dark-image,.bg-grey,.bg-greydark,.bg-greylight,.bg-greymiddle,.bg-greywhite,.bg-white {
          padding: 60px 0;
          clear: both;
          position: relative
      }
      @media (min-width: 1200px) {
          .parallax {
              background-attachment:fixed!important
          }
      }

      .bg-dark-image {
          background: #716f73
      }

      .bg-greydark {
          background: #393e46
      }

      .bg-greymiddle {
          background: #716f73
      }

      .bg-brand-primary .card.card-theme,.bg-brand-primary .edit-mode-link,.bg-brand-primary .fa,.bg-brand-primary .h1,.bg-brand-primary .h2,.bg-brand-primary .h3,.bg-brand-primary .h4,.bg-brand-primary .h5,.bg-brand-primary .h6,.bg-brand-primary .timeline>li.timeline-divider time,.bg-brand-primary h1,.bg-brand-primary h2,.bg-brand-primary h3,.bg-brand-primary h4,.bg-brand-primary h5,.bg-brand-primary h6,.bg-brand-primary p,.bg-brand-secondary .card.card-theme,.bg-brand-secondary .edit-mode-link,.bg-brand-secondary .fa,.bg-brand-secondary .h1,.bg-brand-secondary .h2,.bg-brand-secondary .h3,.bg-brand-secondary .h4,.bg-brand-secondary .h5,.bg-brand-secondary .h6,.bg-brand-secondary .timeline>li.timeline-divider time,.bg-brand-secondary h1,.bg-brand-secondary h2,.bg-brand-secondary h3,.bg-brand-secondary h4,.bg-brand-secondary h5,.bg-brand-secondary h6,.bg-brand-secondary p,.bg-dark-image .card.card-theme,.bg-dark-image .edit-mode-link,.bg-dark-image .h1,.bg-dark-image .h2,.bg-dark-image .h3,.bg-dark-image .h4,.bg-dark-image .h5,.bg-dark-image .h6,.bg-dark-image .timeline>li.timeline-divider time,.bg-dark-image h1,.bg-dark-image h2,.bg-dark-image h3,.bg-dark-image h4,.bg-dark-image h5,.bg-dark-image h6,.bg-dark-image p,.bg-grey .card.card-theme,.bg-grey .edit-mode-link,.bg-grey .h1,.bg-grey .h2,.bg-grey .h3,.bg-grey .h4,.bg-grey .h5,.bg-grey .h6,.bg-grey .timeline>li.timeline-divider time,.bg-greydark .card.card-theme,.bg-greydark .edit-mode-link,.bg-greydark .h1,.bg-greydark .h2,.bg-greydark .h3,.bg-greydark .h4,.bg-greydark .h5,.bg-greydark .h6,.bg-greydark .timeline>li.timeline-divider time,.bg-greydark h1,.bg-greydark h2,.bg-greydark h3,.bg-greydark h4,.bg-greydark h5,.bg-greydark h6,.bg-greydark p,.bg-grey h1,.bg-grey h2,.bg-grey h3,.bg-grey h4,.bg-grey h5,.bg-grey h6,.bg-greymiddle .card.card-theme,.bg-greymiddle .edit-mode-link,.bg-greymiddle .h1,.bg-greymiddle .h2,.bg-greymiddle .h3,.bg-greymiddle .h4,.bg-greymiddle .h5,.bg-greymiddle .h6,.bg-greymiddle .timeline>li.timeline-divider time,.bg-greymiddle h1,.bg-greymiddle h2,.bg-greymiddle h3,.bg-greymiddle h4,.bg-greymiddle h5,.bg-greymiddle h6,.bg-greymiddle p,.bg-grey p,.timeline>li.timeline-divider .bg-brand-primary time,.timeline>li.timeline-divider .bg-brand-secondary time,.timeline>li.timeline-divider .bg-dark-image time,.timeline>li.timeline-divider .bg-greydark time,.timeline>li.timeline-divider .bg-greymiddle time,.timeline>li.timeline-divider .bg-grey time,.timeline>li.timeline-divider footer .bg-brand-primary time,.timeline>li.timeline-divider footer .bg-brand-secondary time,.timeline>li.timeline-divider footer .bg-dark-image time,.timeline>li.timeline-divider footer .bg-greydark time,.timeline>li.timeline-divider footer .bg-greymiddle time,.timeline>li.timeline-divider footer .bg-grey time,footer .bg-brand-primary .h1,footer .bg-brand-primary .h2,footer .bg-brand-primary .h3,footer .bg-brand-primary .h4,footer .bg-brand-primary .h5,footer .bg-brand-primary .h6,footer .bg-brand-primary .timeline>li.timeline-divider time,footer .bg-brand-primary address,footer .bg-brand-primary address a,footer .bg-brand-primary h1,footer .bg-brand-primary h2,footer .bg-brand-primary h3,footer .bg-brand-primary h4,footer .bg-brand-primary h5,footer .bg-brand-primary h6,footer .bg-brand-primary p,footer .bg-brand-primary ul li a,footer .bg-brand-primary ul li span,footer .bg-brand-secondary .h1,footer .bg-brand-secondary .h2,footer .bg-brand-secondary .h3,footer .bg-brand-secondary .h4,footer .bg-brand-secondary .h5,footer .bg-brand-secondary .h6,footer .bg-brand-secondary .timeline>li.timeline-divider time,footer .bg-brand-secondary address,footer .bg-brand-secondary address a,footer .bg-brand-secondary h1,footer .bg-brand-secondary h2,footer .bg-brand-secondary h3,footer .bg-brand-secondary h4,footer .bg-brand-secondary h5,footer .bg-brand-secondary h6,footer .bg-brand-secondary p,footer .bg-brand-secondary ul li a,footer .bg-brand-secondary ul li span,footer .bg-dark-image .h1,footer .bg-dark-image .h2,footer .bg-dark-image .h3,footer .bg-dark-image .h4,footer .bg-dark-image .h5,footer .bg-dark-image .h6,footer .bg-dark-image .timeline>li.timeline-divider time,footer .bg-dark-image address,footer .bg-dark-image address a,footer .bg-dark-image h1,footer .bg-dark-image h2,footer .bg-dark-image h3,footer .bg-dark-image h4,footer .bg-dark-image h5,footer .bg-dark-image h6,footer .bg-dark-image p,footer .bg-dark-image ul li a,footer .bg-dark-image ul li span,footer .bg-grey .h1,footer .bg-grey .h2,footer .bg-grey .h3,footer .bg-grey .h4,footer .bg-grey .h5,footer .bg-grey .h6,footer .bg-grey .timeline>li.timeline-divider time,footer .bg-grey address,footer .bg-grey address a,footer .bg-greydark .h1,footer .bg-greydark .h2,footer .bg-greydark .h3,footer .bg-greydark .h4,footer .bg-greydark .h5,footer .bg-greydark .h6,footer .bg-greydark .timeline>li.timeline-divider time,footer .bg-greydark address,footer .bg-greydark address a,footer .bg-greydark h1,footer .bg-greydark h2,footer .bg-greydark h3,footer .bg-greydark h4,footer .bg-greydark h5,footer .bg-greydark h6,footer .bg-greydark p,footer .bg-greydark ul li a,footer .bg-greydark ul li span,footer .bg-grey h1,footer .bg-grey h2,footer .bg-grey h3,footer .bg-grey h4,footer .bg-grey h5,footer .bg-grey h6,footer .bg-greymiddle .h1,footer .bg-greymiddle .h2,footer .bg-greymiddle .h3,footer .bg-greymiddle .h4,footer .bg-greymiddle .h5,footer .bg-greymiddle .h6,footer .bg-greymiddle .timeline>li.timeline-divider time,footer .bg-greymiddle address,footer .bg-greymiddle address a,footer .bg-greymiddle h1,footer .bg-greymiddle h2,footer .bg-greymiddle h3,footer .bg-greymiddle h4,footer .bg-greymiddle h5,footer .bg-greymiddle h6,footer .bg-greymiddle p,footer .bg-greymiddle ul li a,footer .bg-greymiddle ul li span,footer .bg-grey p,footer .bg-grey ul li a,footer .bg-grey ul li span {
          color: #fff!important
      }

      .full-height {
          display: flex;
          min-height: 100vh
      }

      .full-height .container,.medium-height .container {
          margin: auto!important
      }

      section.navbar-fixed {
          padding-top: 80px;
          overflow: hidden
      }

      .navbar {
          padding: 0;
          min-height: 75px;
          box-shadow: 0 0 3px rgba(0,0,0,.2)
      }

      .navbar-brand {
          width: 120px;
          height: 75px;
          padding: 25px 0
      }

      .nav,.navbar-brand img {
          margin: 0
      }

      .nav.navbar-right {
          margin-left: auto;
          margin-right: 45px
      }

      .nav>li,.nav>li>a {
          position: relative;
          display: block
      }

      .navbar-nav>li>a {
          height: 75px;
          position: relative;
          padding: 25px 15px!important;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 14px;
          color: #393e46;
          display: inline-block
      }
      .nav>li>.dropdown-menu {
          border-radius: 0;
          border: none;
          left: 50%;
          margin-top: 0;
          right: auto;
          text-align: left;
          position: absolute!important;
          transform: translate(-50%,20px);
          box-shadow: 0 0 8px rgba(0,0,0,.1),0 -20px 10px rgba(44,44,44,.04);
          padding: 10px;
          font-size: 14px
      }
      .navbar-transparent {
          background: transparent;
          transition: all .3s ease-in-out;
          box-shadow: none
      }

      .bg-dark-image .nav>li>a {
          color: #fff!important
      }

      .navbar-toggler {
          float: left;
          margin: 0;
          padding: 9px 20px;
          height: 75px;
          border: none!important;
          border-radius: 0
      }

      .menu-toggle {
          display: block;
          float: right;
          margin-left: -10px;
          width: 35px
      }

      .menu-toggle .fa {
          display: block;
          height: 75px;
          width: 35px;
          line-height: 75px;
          font-size: 22px;
          text-align: center;
          margin: 0 auto;
          color: #5198f3;
          transition: transform .2s ease-in-out
      }

      .navbar-search-toggle {
          position: absolute;
          top: 0;
          right: 10px;
          display: block;
          height: 75px;
          width: 50px;
          padding: 23px 0;
          text-align: center
      }

      .navbar-search-toggle .fa {
          font-size: 22px;
          padding: 0;
          color: #b1b1b1
      }

      .navbar-search-toggle:after {
          font-size: 18px;
          content: "|";
          color: #ddd;
          position: absolute;
          top: 22px;
          left: -9px
      }

      .navbar-collapse,.navbar-header,.search-box {
          transition: all .2s ease-in-out
      }

      .search-box {
          opacity: 0;
          position: absolute;
          top: 20px;
          right: 5px;
          left: 20px;
          z-index: -1
      }
      .search-box .form-control {
          background: #e9e9e9;
          border-radius: 50px 0 0 50px;
          border: 0;
          box-shadow: inset 0 0 3px rgba(0,0,0,.2)
      }

      .search-box .btn-search {
          border-radius: 0 50px 50px 0!important;
          background: #b1b1b1;
          border-color: #b1b1b1;
          padding: 3px 10px;
          min-height: 36px;
          margin: 0
      }

      .search-box .btn-search .fa {
          font-size: 16px;
          padding: 0 0 4px;
          color: #fff;
          text-align: center
      }

      .search-box .btn-clear-white {
          background: transparent;
          border-color: transparent;
          padding: 0 10px;
          min-height: 36px;
          margin: 0
      }

      .search-box .btn-clear-white .fa {
          font-size: 20px;
          padding: 0 0 3px;
          color: #b1b1b1;
          text-align: center
      }

      @media (min-width: 1200px) {
          .navbar .container {
              padding:0 40px;
              max-width: 100%
          }
      }
      footer [class*=bg-]:first-of-type {
          padding: 60px 0
      }
      #application,body {
          height: 100%;
          padding: 0;
          margin: 0
      }

      #application>div {
          min-height: 100vh;
          display: flex;
          flex-direction: column
      }

      .content-wrapper {
          flex: 1
      }

    </style>
  </head>
  <body ${bodyAttributes}>
    <div id="application" data-scrivito-prerendering-obj-id="${objId}">${bodyContent}</div>
    <script src="${preloadDumpFileName}"></script>
  </body>
</html>
`;
}
