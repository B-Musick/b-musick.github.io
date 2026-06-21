type ButtonProps = {
  url: string;
  text: string;
};

export default function Button({ url, text }: ButtonProps) {
  return (
    <a href={url} className="bg-sky-500 text-white px-3 py-1 rounded-xl mt-5">
      {text}
    </a>
  );
}
