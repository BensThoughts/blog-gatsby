import * as React from 'react';
import App from '@app/components/Layout/App';

import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import { graphql, useStaticQuery } from 'gatsby';


const GridContainer = styled.div`
  display: grid;
  height: 100%;
  gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 32px;
  }

  *{
    grid-column: auto;
    grid-row: auto;
  }
`;
interface BlogArticleListProps {
  data: {
    allMdx: {
      nodes: {
        slug: string,
        frontmatter: {
          slug: string,
          title: string,
          longDescription: string,
          date: string,
          tags: string[]
        }
      }[]
    }
  }
}

export default function BlogArticleListPage({data}: BlogArticleListProps) {
  console.log(data);
  return (
    <App>
      <MaxWidthWrapper>
        <SectionTitle>
          <span className="text-icon-secondary">[&nbsp;</span>
            Blog
          <span className="text-icon-secondary">&nbsp;]</span>
        </SectionTitle>
        <GridContainer>
          {data.allMdx.nodes.map(({
            slug,
            frontmatter: {
              title,
              date,
              longDescription,
              tags,
            }
          }, idx) => {
            return (
              <BlogCard
                key={slug}
                slug={slug}
                title={title}
                date={date}
                tags={tags}
                description={longDescription}
              />
            );
          })}
  
        </GridContainer>
      </MaxWidthWrapper>          
    </App>
  );
};

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        longDescription
        date
        title
        tags
      }
      id
      slug
    }
  }
}
`;