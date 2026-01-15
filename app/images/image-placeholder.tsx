export const ImagePlaceholder = () => (
  <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded-lg aspect-square">
    {" "}
    <div className="flex flex-col items-center gap-2 text-slate-400">
      {" "}
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />{" "}
      </svg>{" "}
      <span className="text-sm font-medium">이미지 준비 중</span>{" "}
    </div>{" "}
  </div>
);
