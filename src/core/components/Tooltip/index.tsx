import { ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

type Arrow = {
  width: number;
  height: number;
};

interface TooltipProps {
  content: string;
  children: ReactNode;
  delay?: number;
  arrow?: Arrow;
}

function Tooltip({ content, children, delay, arrow }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delay || 250}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Content side="top" align="center">
          {content}
          {arrow && (
            <RadixTooltip.Arrow width={arrow.width} height={arrow.height} />
          )}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default Tooltip;
