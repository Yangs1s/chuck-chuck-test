const DeskTopFooter = () => {
  return (
    <footer className="bg-secondary-bg dark:bg-[#0a140e] py-10 px-4 md:px-20 lg:px-40 mt-auto border-t border-[#e5e9e7] dark:border-[#1a2a1f]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-lg font-bold">척척밥상</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-600 dark:text-slate-500">
            <span>상호명: (주)척척밥상</span>
            <span>사업자등록번호: 000-00-00000</span>
            <span>대표자: 이유통</span>
            <span>주소: 인천광역시 송도동 123</span>
          </div>
          <div className="text-[10px] text-slate-400 dark:text-slate-500">
            © 2026 Cheok-Cheok Bapsang Corp. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 text-xs font-medium text-slate-600 dark:text-slate-300">
          <a className="hover:text-primary transition-colors" href="#">
            이용약관
          </a>
          <a
            className="hover:text-primary transition-colors font-bold"
            href="#"
          >
            개인정보처리방침
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            고객센터
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DeskTopFooter;
