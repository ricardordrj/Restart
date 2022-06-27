import React from "react";
import { storiesOf } from "@storybook/react";

import Pagination from ".";

storiesOf("Pagination", module)
  .add("without props", () => <Pagination />)
  .add("with total and active Page", () => (
    <Pagination total={10} activePage={5} />
  ))
  .add("wiith PpageLink", () => (
    <Pagination total={10} pageLink={"https://page.com"} />
  ));
