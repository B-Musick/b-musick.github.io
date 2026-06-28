interface WrappedImageTextProps {
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

export default function WrappedImageText({
  imageUrl,
  imageAlt = "",
  imagePosition = "top",
  children,
}: WrappedImageTextProps) {
  const imageOffset = {
    top: "0",
    middle: "8rem",
    bottom: "16rem",
  };

  return (
    <div className="leading-7 after:block after:clear-both after:content-['']">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="
					float-none
					md:float-right
					w-full
					md:w-[45%]
					ml-0
					md:ml-8
					mb-4
					rounded-lg
					block
				"
        style={{
          marginTop: window.innerWidth >= 768 ? imageOffset[imagePosition] : 0,
        }}
      />

      <div>{children}</div>
    </div>
  );
}
