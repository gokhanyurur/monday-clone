import { mount } from "@vue/test-utils";
import Dropdown from "@/components/molecules/Dropdown.vue";
import SquareTags from "@/components/molecules/SquareTags.vue";

describe("Dropdown Molecule", () => {
  test("Check props", () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        classes: "test__class",
        isOpened: false,
      },
      slots: {
        default: "Open me",
        content: "Test content",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("span").text()).toBe("Open me");
    expect(wrapper.find(".m__dropdown__icon--rotate").exists()).toBe(false);
    expect(wrapper.find(".m__dropdown__content").text()).toBe("Test content");
    expect(wrapper.findAll("div").at(1).classes().includes("test__class")).toBe(
      true
    );
    expect(wrapper.findAll("div").at(2).classes().includes("open")).toBe(false);
  });
  test("toggle dropdown content", () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        isOpened: true,
      },
      slots: {
        default: "Open me",
        content: "Test content",
      },
    });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find(".m__dropdown__icon--rotate").exists()).toBe(true);
    expect(wrapper.findAll("div").at(2).classes().includes("open")).toBe(true);
  });
});

describe("SquareTags Molecule", () => {
  test("Check button color change", () => {
    const wrapper = mount(SquareTags);
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.vm.currentBtnColor).toBe("#5034ff 25.69%, #b4b4ff 100%");

    // Selects a tag.
    wrapper.findAll("div").at(3).trigger("click");

    expect(wrapper.vm.currentBtnColor).toBe("#ff158a 0%, #ff158a 100%");

    // Selects another tag.
    wrapper.findAll("div").at(8).trigger("click");

    expect(wrapper.vm.currentBtnColor).toBe("#ff158a 0%, #00c875 100%");

    // Selects one more tag.
    wrapper.findAll("div").at(13).trigger("click");

    expect(wrapper.vm.currentBtnColor).toBe(
      "#ff158a 0%, #00c875 50%, #f04095 100%"
    );

    // Deselect the middle tag selected.
    wrapper.findAll("div").at(8).trigger("click");

    expect(wrapper.vm.currentBtnColor).toBe("#ff158a 0%, #f04095 100%");
  });
});
