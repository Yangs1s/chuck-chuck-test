export default function MobileFooter() {
  return (
    <footer className="bg-secondary-bg dark:bg-[#0a140e] py-10 px-4 md:px-20 lg:px-40 mt-auto border-t border-[#e5e9e7] dark:border-[#1a2a1f]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <div className="size-6">
              {/* <ChLogo /> */}
              mobile Footer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
