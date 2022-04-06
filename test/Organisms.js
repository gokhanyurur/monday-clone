import { mount } from "@vue/test-utils";
import Navigation from "@/components/organisms/Navigation.vue";

describe("Navigation Organism", () => {
  test("renders correctly", () => {
    const wrapper = mount(Navigation);
    expect(wrapper.vm).toBeTruthy();
  });
});
