import { mount } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";
import Logo from "@/components/atoms/Logo.vue";
import DropdownItem from "@/components/atoms/DropdownItem.vue";
import MInput from "@/components/atoms/MInput";
import Separator from "@/components/atoms/Separator";
import SquareTag from "@/components/atoms/SquareTag";

describe("Button Atom", () => {
  test("Check props", () => {
    const wrapper = mount(Button, {
      propsData: {
        classes: "test__class",
        text: "Button Label",
        size: "lg",
        disableAnimation: true,
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("span").text()).toBe("Button Label");
    expect(wrapper.find("span").classes().includes("text-lg")).toBe(true);
    expect(
      wrapper.findAll("span").at(1).classes().includes("disable-animation")
    ).toBe(true);
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

describe("MInput Atom", () => {
  test("test props", () => {
    const wrapper = mount(MInput, {
      propsData: {
        placeholder: "Test placeholder",
        classes: "test-input-class",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find("input").attributes().placeholder).toBe(
      "Test placeholder"
    );
    expect(wrapper.find("input").classes().includes("test-input-class")).toBe(
      true
    );
  });
});

describe("Separator Atom", () => {
  test("test props", () => {
    const wrapper = mount(Separator, {
      propsData: {
        text: "Or",
        classes: "test-separator-wrapper",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(
      wrapper.find("div").classes().includes("test-separator-wrapper")
    ).toBe(true);
    expect(wrapper.findAll("span").at(0).attributes().class).toBe(
      "separator__line"
    );
    expect(wrapper.findAll("span").at(1).text()).toBe("Or");
    expect(wrapper.findAll("span").at(2).attributes().class).toBe(
      "separator__line"
    );
  });
});

describe("Square Tag Atom", () => {
  test("test props", () => {
    const wrapper = mount(SquareTag, {
      propsData: {
        title: "Test tag",
        imgSrc: "dev.png",
        color: "#ffffff",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.findAll("div").at(1).attributes().style).toBe(
      "--currentColor: #ffffff;"
    );
    expect(wrapper.findAll("div").at(4).text()).toBe("Test tag");
  });
  test("check toggle functionality", () => {
    const wrapper = mount(SquareTag, {
      propsData: {
        title: "Test tag",
        imgSrc: "dev.png",
        color: "#ffffff",
      },
    });
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.findAll("div").at(1).classes().includes("active")).toBe(
      false
    );
    wrapper.vm.toggleCheck();
    expect(wrapper.findAll("div").at(1).classes().includes("active")).toBe(
      true
    );
  });
});
