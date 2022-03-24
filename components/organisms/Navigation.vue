<template>
  <div>
    <div class="m__nav hidden lg:block">
      <div class="m__container flex">
        <Logo />
        <nav class="m__nav__wrapper">
          <div class="flex float-right h-full items-center pl-8">
            <Button
              classes="bg-main-blue text-light px-4 py-2 rounded-full outline-none m__btn"
            />
          </div>
          <div class="flex float-right h-full items-center">
            <a
              v-for="(navItem, navRightIndex) in navRightSide"
              :key="`nav-right-${navRightIndex}`"
              :href="navItem.url"
              class="px-4 m__nav__item"
              >{{ navItem.title }}</a
            >
          </div>
          <div class="flex h-full items-center">
            <div
              v-for="(navItem, index) in navLeftSide"
              :key="`nav-item-${index}`"
            >
              <Dropdown v-if="navItem.isDropdown" classes="px-4 m__nav__item">
                {{ navItem.title }}
                <template #content>
                  <div class="m__container">
                    <div class="grid grid-cols-4 gap-4">
                      <div
                        v-for="(section, sectionIndex) in navItem.sections"
                        :key="`nav-section-${sectionIndex}`"
                        class="m__dropdown__section mr-6"
                        :class="section.wide ? 'col-span-2' : ''"
                      >
                        <h4 class="font-black">{{ section.title }}</h4>
                        <div
                          class="mt-3 mb-4"
                          :class="
                            section.wide
                              ? 'm__dropdown__section__item__wrapper--col-2'
                              : ''
                          "
                        >
                          <DropdownItem
                            v-for="(
                              dropdownItem, dropdownItemKey
                            ) in section.items"
                            :key="`dropdown-item${dropdownItemKey}`"
                            :icon="dropdownItem.icon"
                            :title="dropdownItem.title"
                            :description="dropdownItem.description"
                            :url="dropdownItem.url"
                            :badge-txt="dropdownItem.badgeTxt"
                          />
                        </div>
                        <Button
                          v-if="section.seeMore"
                          classes="text-light-dark text-sm outline-none m__btn m__link mb-4"
                          :text="section.seeMore.text"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </Dropdown>
              <a v-else :href="navItem.url" class="px-4">{{ navItem.title }}</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="m__nav__mobile block lg:hidden"></div>
  </div>
</template>

<script>
import Logo from "@/components/atoms/Logo";
import Button from "@/components/atoms/Button";
import Dropdown from "@/components/molecules/Dropdown";
import DropdownItem from "@/components/atoms/DropdownItem";
export default {
  name: "Navigation",
  components: { Dropdown, Logo, Button, DropdownItem },
  data() {
    return {
      navRightSide: [
        {
          title: "Contact sales",
          url: "#",
        },
        {
          title: "Log in",
          url: "#",
        },
      ],
      navLeftSide: [
        {
          isDropdown: true,
          title: "Product",
          sections: [
            {
              title: "Overview",
              items: [
                {
                  url: "#",
                  icon: "checklist.svg",
                  title: "Product overview",
                  description:
                    "Learn more about the platform, main features, and benefits",
                },
                {
                  url: "#",
                  icon: "puzzle.svg",
                  title: "Apps marketplace",
                  description:
                    "Explore ready-made apps to expand the monday.com Work OS",
                },
                {
                  url: "#",
                  icon: "bag.svg",
                  title: "Customer Stories",
                  description:
                    "Learn how our customers achieve success using monday.com",
                },
              ],
            },
            {
              title: "Features",
              wide: true,
              items: [
                {
                  url: "#",
                  icon: "doc.svg",
                  title: "Docs",
                  description:
                    "Collaborate, connect, and execute ideas and workflows",
                },
                {
                  url: "#",
                  icon: "socket.svg",
                  title: "Integrations",
                  description:
                    "Connect your team's existing tools to get more work done",
                },
                {
                  url: "#",
                  icon: "robot-head.svg",
                  title: "Automations",
                  description: "Set up customizable automations within minutes",
                },
                {
                  url: "#",
                  icon: "dashboard.svg",
                  title: "Dashboards",
                  description:
                    "Simplify decision making with real-time data insights",
                },
                {
                  url: "#",
                  icon: "sections-vertical.svg",
                  title: "Kanban",
                  description:
                    "Prioritize tasks and balance demands according to capacity",
                },
                {
                  url: "#",
                  icon: "sections-horizontal.svg",
                  title: "Gantt",
                  description:
                    "Visualize project milestones and dependencies all in one place",
                },
              ],
            },
            {
              title: "More by monday.com",
              items: [
                {
                  url: "#",
                  icon: "forms.svg",
                  title: "WorkForms",
                  description:
                    "Streamline requests and collect any data with customizable forms",
                  badgeTxt: "Beta",
                },
                {
                  url: "#",
                  icon: "paper.svg",
                  title: "Canvas",
                  description:
                    "Bring your ideas to life on a collaborative real-time whiteboard",
                  badgeTxt: "Beta",
                },
              ],
            },
          ],
        },
        {
          isDropdown: true,
          title: "Solutions",
          sections: [
            {
              title: "Team",
              wide: true,
              items: [
                {
                  url: "#",
                  icon: "creative.svg",
                  title: "Marketing and creative",
                  description:
                    "Collaborate and manage campaigns to drive impact",
                },
                {
                  url: "#",
                  icon: "headset.svg",
                  title: "Sales and CRM",
                  description:
                    "Run your entire sales pipeline and CRM in one place",
                },
                {
                  url: "#",
                  icon: "tool.svg",
                  title: "IT",
                  description:
                    "Manage your IT operations with better control and efficiency",
                },
                {
                  url: "#",
                  icon: "code-tag.svg",
                  title: "Software development",
                  description:
                    "Sprint through every development process, your way",
                },
                {
                  url: "#",
                  icon: "conversation.svg",
                  title: "HR",
                  description:
                    "Structure your HR processes for recruitment and onboarding",
                },
                {
                  url: "#",
                  icon: "gear.svg",
                  title: "Operations",
                  description:
                    "Streamline and scale your business operations in one workspace",
                },
              ],
            },
            {
              title: "Workflow",
              items: [
                {
                  url: "#",
                  icon: "management.svg",
                  title: "Project management",
                  description:
                    "Plan, track, and manage any project from start to finish",
                },
                {
                  url: "#",
                  icon: "inventory.svg",
                  title: "Inventory tracking",
                  description:
                    "Monitor your stock from point of collection to final delivery",
                },
                {
                  url: "#",
                  icon: "remote-work.svg",
                  title: "Remote work",
                  description:
                    "Stay productive and collaborative, wherever you are",
                },
              ],
              seeMore: {
                text: "See all workflows",
                url: "#",
              },
            },
            {
              title: "Business type",
              items: [
                {
                  url: "#",
                  icon: "buildings.svg",
                  title: "Enterprise",
                  description: "Learn more about our enterprise-grade features",
                },
                {
                  url: "#",
                  icon: "small-business.svg",
                  title: "Small-medium business",
                  description: "Run all aspects of your business in one place",
                },
              ],
            },
          ],
        },
        {
          isDropdown: false,
          title: "Templates",
          url: "#",
        },
        {
          isDropdown: false,
          title: "Pricing",
          url: "#",
        },
      ],
    };
  },
};
</script>
