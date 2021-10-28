import * as React from 'react';
import {buildImageUrl} from 'cloudinary-build-url';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import App from '@app/components/Layout/App';
import {MDXProvider} from '@mdx-js/react';

import {
  A,
  ArticleHeader,
  ArticleFooter,
  Blockquote,
  CommandLine,
  Code,
  Date,
  Em,
  Hr,
  H1,
  H2,
  HeaderImage,
  Img,
  InlineCode,
  P,
  Pre,
  Strong,
} from '@app/components/mdx/';
import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  date: Date,
  em: Em,
  hr: Hr,
  h1: H1,
  h2: H2,
  img: Img,
  inlineCode: InlineCode,
  p: P,
  pre: Pre,
  strong: Strong,
  // ArticleHeader,
  BlogCard,
  CommandLine,
  // HeaderImage,
  // Video,
};

type PostProps = {
  data: {
    mdx: {
      body: string,
      // url: string,
      frontmatter: {
        shortDescription: string,
        longDescription: string,
        date: string,
        readTime: number,
        cloudinaryImgPath: string,
        imgWidth: number,
        imgHeight: number,
        imgAlt: string,
        title: string,
        tags: string[]
      }
    }
  }

};

export default function PostsPage({
  data
}: PostProps) {
  const {
    title,
    shortDescription,
    longDescription,
    date,
    readTime,
    tags,
    cloudinaryImgPath,
    imgWidth,
    imgHeight,
    imgAlt,
  } = data.mdx.frontmatter;
  const body = data.mdx.body;
  // const url = data.url;

  let ogImageUrl;
  if (cloudinaryImgPath) {
    ogImageUrl = buildImageUrl(cloudinaryImgPath, {
      cloud: {
        cloudName: 'bensthoughts',
      },
    });
  }

  return (
    <App>
      <MaxWidthWrapper>
        <article>
          <GridWrapper>
            <ArticleHeader
              title={title}
              date={date}
              readTime={readTime}
              permaLink="tempTest"
              tags={tags}
              className="mt-10"
            />
            {cloudinaryImgPath && imgWidth && imgHeight && imgAlt ?
              (
                <HeaderImage
                  imgPath={cloudinaryImgPath}
                  alt={imgAlt}
                  width={imgWidth}
                  height={imgHeight}
                />
              ) :
              (
                <></>
              )
            }
            <MDXProvider components={components}>
              <MDXRenderer components={components}>
                {body}
              </MDXRenderer>
            </MDXProvider>
            <ArticleFooter
              title={title}
              permaLink="tempTest"
              tags={tags}
            />
          </GridWrapper>
        </article>
      </MaxWidthWrapper>
    </App>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
          shortDescription
          longDescription
          date
          readTime
          cloudinaryImgPath
          imgWidth
          imgHeight
          imgAlt
          title
          tags
      }
      body
    }
}
`

