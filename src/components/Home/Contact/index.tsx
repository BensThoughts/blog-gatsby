
import React from 'react';
import {Link} from 'gatsby';

import NetlifyForm from './NetlifyForm';
import {Clipboard} from '@app/components/Icons';
import BorderedBox from '@app/components/BorderedBox';
import AnimatedLink from '@app/components/AnimatedLink';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

type TechBoxProps = {
  className?: string;
}

export default function TechnologiesBox({className}: TechBoxProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <p className="my-2 leading-7">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>
            I would love to here from you.&nbsp;
            </strong>

            Suggestions for this website? A job opportunity? Just to connect and say hi?
            Go ahead! Fill out the form

            <span>&nbsp;<Clipboard className="inline-block content-center text-icon-secondary" />&nbsp;</span>

            and I will respond promptly.

          </p>
        </BorderedBox>
      </div>
      <div className="flex justify-center items-center">
        <BorderedBox>
          <strong>
           I am actively looking for work in the web development space.&nbsp;
          </strong>
          I have extensive knowledge of Javascript &amp; Typescript, as well as numerous frontend and backend
          frameworks as listed in the
          <span className="inline-block">
            <Link
              to="/#skills"
            >
              <AnimatedUnderline
                className="text-secondary"
              >
                  &nbsp;Skills&nbsp;
              </AnimatedUnderline>
            </Link>
          </span>
          section.
        </BorderedBox>
      </div>
      <NetlifyForm />
    </>
  );
}
