import * as React from 'react';
import SEO from '@app/components/Layout/SEO';
import RoundedButton from '@app/components/Button';
import {Link} from 'gatsby';

// styles
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <>
      <SEO title="Not Found" />
      <main
        className="flex flex-col gap-y-8 items-center justify-center text-primary text-center w-full h-full p-10"
      >
        <title>Not found</title>
        <h1 className="text-3xl text-secondary">Page not found</h1>
        <p className="text-primary text-xl">
        Sorry{' '}
          <span role="img" aria-label="Pensive emoji">
          😔
          </span>{' '}
        we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
          <br />
          <Link to="/">
            <RoundedButton className="text-secondary bg-primary">Home</RoundedButton>
          </Link>
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
