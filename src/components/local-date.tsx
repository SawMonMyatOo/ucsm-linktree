"use client";

import { useId } from "react";
import { InlineScript } from "@/components/inline-script";

const dateFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

type LocalDateProps = {
  date: string;
};

export function LocalDate({ date }: LocalDateProps) {
  const id = useId();

  return (
    <>
      <time id={id} dateTime={date} suppressHydrationWarning>
        {new Date(date).toLocaleDateString(undefined, dateFormat)}
      </time>
      <InlineScript
        html={`{var n=document.getElementById("${id}");if(n)n.textContent=new Date("${date}").toLocaleDateString(undefined,${JSON.stringify(dateFormat)})}`}
      />
    </>
  );
}
