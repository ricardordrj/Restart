import React from "react";
import { storiesOf } from "@storybook/react";

import Card from ".";

storiesOf("Card", module).add("Default", () => (
  <Card title="Card Title" url="/example/url" />
));
