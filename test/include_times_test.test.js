import React from "react";
import { mount } from "enzyme";
import * as utils from "../src/date_utils";
import TimeComponent from "../src/time";

describe("TimeComponent", () => {
  it("should only enable times specified in includeTimes props", () => {
    const today = utils.getStartOfDay(utils.newDate());
    const timeComponent = mount(
      <TimeComponent
        includeTimes={[
          utils.addMinutes(today, 60),
          utils.addMinutes(today, 120),
          utils.addMinutes(today, 150),
        ]}
      />,
    );

    const disabledItems = timeComponent.find(
      ".react-datepicker__time-list-item--disabled",
    );
    expect(disabledItems).toHaveLength(45);
  });
});
