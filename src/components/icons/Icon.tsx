import type { Component } from 'solid-js';
import { Typography } from '..';

interface IconProps {
  label: string;
  icon: Component;
}

export const Icon: Component<IconProps> = (props) => (
  <div class="flex flex-col justify-center items-center m-2 min-h-[5rem] max-h-[7rem] md:max-h-[8rem] [&>svg]:h-full [&>svg]:w-full">
    <props.icon />
    <Typography class="text-gray-300 my-2">{props.label}</Typography>
  </div>
);
