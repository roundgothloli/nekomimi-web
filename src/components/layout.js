// @flow
import React, { type Node } from 'react';
import { Link } from 'gatsby';

type Props = {
  children: Node
};

export default (props: Props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <h1>Nekomimi Web</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
};
