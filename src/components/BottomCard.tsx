type BottomCardProps = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function BottomCard({
  url,
  title,
  description,
  imageUrl,
}: BottomCardProps) {
  return (
    <a
      href={url}
      className="bg-white text-slate-800 w-1/2 lg:w-1/3 m-1 h-full rounded-t-xl overflow-hidden hover:scale-y-125 hover:lg:scale-125 text-right"
    >
      <div className="h-2 bg-gradient-to-r bg-sky-500 via-sky-400 bg-purple-300" />

      <div className="p-2 text-right">
        <div className="flex justify-between items-start">
          <img src={imageUrl} className="w-[25%]" />
          <h3 className="font-bold text-[22px] text-slate-800">{title}</h3>
        </div>
        <p className="mt-4 text-sm">{description}</p>
      </div>
    </a>
  );
}
