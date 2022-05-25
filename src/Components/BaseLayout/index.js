import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BlackBox, Wrapper } from "./styles";

const BaseLayout = ({ title, children }) => {
  return (
    <Wrapper role="root">
      <BlackBox data-testid="parent">
        <header>
          <h1>{title ? title : `⌈ Wired Site For Wired People ⌋`}</h1>
        </header>
        <main data-testid="children">{children}</main>
        <footer>
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
            </ul>
          </nav>
        </footer>
      </BlackBox>
    </Wrapper>
  );
};

BaseLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
BaseLayout.defaultProps = {
  title: `⌈ Wired Site For Wired People ⌋`,
};

export default BaseLayout;
