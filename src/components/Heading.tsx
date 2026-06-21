type HeadingProps = {
  level: number;
  text: string;
  classes: string;
};

export default function Heading({ level, text, classes }: HeadingProps) {
  let headingClasses = `text-slate-600 dark:text-white ${classes}`;

  switch (level) {
    case 1:
      return <h1 className={`${headingClasses}`}>{text}</h1>;
    case 2:
      return <h2 className={`${headingClasses}`}>{text}</h2>;
  }
}
