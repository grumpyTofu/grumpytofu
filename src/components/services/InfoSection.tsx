import type { JSX, ParentComponent } from 'solid-js';

import { Card, CardActions, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';

export interface InfoSectionProps {
  title: string;
  content: JSX.Element;
  link: string;
}

export const InfoSection: ParentComponent<InfoSectionProps> = ({ title, content, link }) => {
  return (
    <Card class="flex flex-col col-span-1" variant="transparant" growOnHover>
      <a href={link} class="contents">
        <CardHeader>{title}</CardHeader>
        <CardContent>{content}</CardContent>
        <CardActions>
          <Typography>Read More...</Typography>
        </CardActions>
      </a>
    </Card>
  );
};
