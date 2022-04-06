import { mount } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";
import Logo from "@/components/atoms/Logo.vue";
import DropdownItem from "@/components/atoms/DropdownItem.vue";

describe("Button Atom", () => {
  test("Check props", () => {
    const wrapper = mount(Button, {
      propsData: {
        classes: "test__class",
        text: "Button Label",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("span").text()).toBe("Button Label");
    expect(wrapper.find("button").classes().includes("test__class")).toBe(true);
  });

  test("Default label", () => {
    const wrapper = mount(Button);
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("span").text()).toBe("Get Started");
  });
});

describe("DropdownItem Atom", () => {
  test("Test DropdownItem props", () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        title: "Dropdown Item",
        description: "Lorem ipsum",
        url: "/page-to",
        badgeText: "Beta",
      },
    });

    expect(wrapper.find("a").attributes().href).toBe("/page-to");
    expect(wrapper.find("a").attributes().badgetext).toBe("Beta");
    expect(wrapper.findAll("span").at(0).text()).toBe("Dropdown Item");
    expect(wrapper.findAll("span").at(1).text()).toBe("Lorem ipsum");
  });
});

describe("Logo Atom", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy();
  });
});
