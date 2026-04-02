import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroSection } from "../components/HeroSection";

const meta = {
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-dvh flex flex-col bg-background text-foreground">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
