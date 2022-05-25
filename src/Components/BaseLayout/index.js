import PropTypes from "prop-types";
import { BlackBox, Wrapper } from "./styles";

const BaseLayout = ({ title, children }) => {
  return (
    <Wrapper>
      <BlackBox>
        <header>
          <h1>{title ? title : `⌈ Wired Sound For Wired People ⌋`}</h1>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
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
  title: `⌈ Wired Sound For Wired People ⌋`,
};

export default BaseLayout;
