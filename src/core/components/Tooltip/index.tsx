import { ReactNode } from "react";
import * as Primitive from "@radix-ui/react-tooltip";

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
    <Primitive.Provider delayDuration={delay || 250}>
      <Primitive.Root>
        <Primitive.Trigger asChild>{children}</Primitive.Trigger>
        <Primitive.Content side="top" align="center">
          {content}
          {arrow && (
            <Primitive.Arrow width={arrow.width} height={arrow.height} />
          )}
        </Primitive.Content>
      </Primitive.Root>
    </Primitive.Provider>
  );
}

export default Tooltip;
