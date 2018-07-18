import * as React from 'react';
import * as Scrivito from 'scrivito';
import BlogPostAuthor from '../../Components/BlogPost/BlogPostAuthor';
import BlogPostMorePosts from '../../Components/BlogPost/BlogPostMorePosts';
import BlogPostNavigation from '../../Components/BlogPost/BlogPostNavigation';
import BlogPostTagList from '../../Components/BlogPost/BlogPostTagList';
import SchemaDotOrg from '../../Components/SchemaDotOrg';
import Disqus from 'disqus-react';

<<<<<<< HEAD
Scrivito.provideComponent('BlogPost', ({ page }) => {
  const disqusShortname = 'jcdemo';
  const disqusConfig = {
      url: Scrivito.urlFor(page),
      identifier: page.id(),
      title: page.get('title'),
  };

  return (
    <div>
      <BlogPostNavigation currentPost={ page }/>
      <section className='bg-white'>
        <div className='container'>
          <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
          <Scrivito.ContentTag tag="h2" className="h4" content={ page } attribute="subtitle" />
        </div>
      </section>
      <Scrivito.ContentTag tag="div" content={ page } attribute="body" />
      <div className='container'>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      <BlogPostAuthor style="width: 18rem;" author={ page.get('author') } />
      <BlogPostTagList tags={ page.get('tags') } />
      <BlogPostMorePosts author={ page.get('author') } />
      <SchemaDotOrg content={ page } />
    </div>
  );
});
=======
Scrivito.provideComponent('BlogPost', ({ page }) => (
  <div>
    <BlogPostNavigation currentPost={page} />
    <section className="bg-white">
      <div className="container">
        <Scrivito.ContentTag tag="h1" className="h2" content={page} attribute="title" />
        <Scrivito.ContentTag tag="h2" className="h4" content={page} attribute="subtitle" />
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={page} attribute="body" />
    <BlogPostAuthor author={page.get('author')} />
    <BlogPostTagList tags={page.get('tags')} />
    <BlogPostMorePosts author={page.get('author')} />
    <SchemaDotOrg content={page} />
  </div>
));
>>>>>>> ceda8974ad1e2891d45d716dc2fdb51b934825c8
