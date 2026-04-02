import type { Meta, StoryObj } from "@storybook/react-vite";
import { DownloadButton } from "../components/DownloadButton";

const meta = {
  component: DownloadButton,
  decorators: [
    (Story) => (
      <div className="bg-background p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
