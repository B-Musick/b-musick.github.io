type BottomCardProps = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  classes: string;
};

export default function BottomCard({
  url,
  title,
  description,
  imageUrl,
  classes,
}: BottomCardProps) {
  return (
    <a
      href={url}
      className={`bg-white text-slate-800 w-1/2 lg:w-1/3 m-1 bottom-0 h-full rounded-t-xl overflow-hidden hover:scale-y-125 hover:lg:scale-125 text-right ${classes}`}
    >
      <div className="h-2 bg-gradient-to-r bg-sky-600 via-purple-100 bg-purple-400" />

      <div className="p-2 text-right">
        <div className="flex justify-between items-start">
          <div className="w-[25%] h-[70px] flex items-center">
            <img src={imageUrl} />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-sm">{description}</p>
      </div>
    </a>
  );
}
