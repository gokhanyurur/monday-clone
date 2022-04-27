import { mount } from "@vue/test-utils";
import { jest } from "@jest/globals";
import Navigation from "@/components/organisms/Navigation.vue";

describe("Navigation Organism", () => {
  test("renders correctly", () => {
    const wrapper = mount(Navigation);
    expect(wrapper.vm).toBeTruthy();
  });
  test("opens a dropdown then opens another then checks if the first one is closed", () => {
    const wrapper = mount(Navigation);
    expect(wrapper.vm).toBeTruthy();
    // Mocks the document as the body is not exist to add blur on dropdown open
    jest.spyOn(document, "getElementById").mockImplementation(() => undefined);

    expect(wrapper.vm.navMenuItems.navLeftSide[0].isOpened).toBe(false);
    wrapper.vm.handleDropdownVisibility({ title: "Product", isOpened: true });
    expect(wrapper.vm.navMenuItems.navLeftSide[0].isOpened).toBe(true);

    wrapper.vm.handleDropdownVisibility({ title: "Solutions", isOpened: true });
    expect(wrapper.vm.navMenuItems.navLeftSide[0].isOpened).toBe(false);
    expect(wrapper.vm.navMenuItems.navLeftSide[1].isOpened).toBe(true);

    wrapper.vm.handleDropdownVisibility({
      title: "Solutions",
      isOpened: false,
    });
    expect(wrapper.vm.navMenuItems.navLeftSide[1].isOpened).toBe(false);
  });
});
