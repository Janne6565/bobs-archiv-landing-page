import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScreenshotShowcase } from "../components/ScreenshotShowcase";

const meta = {
  component: ScreenshotShowcase,
  decorators: [
    (Story) => (
      <div className="bg-background p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScreenshotShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
