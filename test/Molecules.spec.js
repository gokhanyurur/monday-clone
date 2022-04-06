import { mount } from "@vue/test-utils";
import Dropdown from "@/components/molecules/Dropdown.vue";

describe("Dropdown Molecule", () => {
  test("Check props", () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        classes: "test__class",
        isOpened: true,
      },
      slots: {
        default: "Open me",
        content: "Test content",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("span").text()).toBe("Open me");
    expect(wrapper.find(".m__dropdown__icon--rotate").exists()).toBe(true);
    expect(wrapper.find(".m__dropdown__content").text()).toBe("Test content");
    expect(wrapper.findAll("div").at(1).classes().includes("test__class")).toBe(
      true
    );
  });
});
