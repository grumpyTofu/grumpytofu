"use client";

import { Card, CardActions, CardContent, CardHeader, Typography } from "@portfolio/components";
import { useRouter } from "next/navigation";
import React from "react";

export interface InfoSectionProps {
  title: string;
  content: React.ReactNode | JSX.Element;
  link: string;
}

const InfoSection = ({ title, content, link }: InfoSectionProps) => {
  const router = useRouter();
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => router.push(link);

  return (
    <Card className="flex flex-col col-span-1" variant="transparant" growOnHover>
      <div data-link={link} onClick={handleClick}>
        <CardHeader>{title}</CardHeader>
        <CardContent>{content}</CardContent>
        <CardActions>
          <Typography>Read More...</Typography>
        </CardActions>
      </div>
    </Card>
  );
};

export default InfoSection;
