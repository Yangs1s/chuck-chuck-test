import MobileFooter from "./MobileFooter";
import DeskTopFooter from "./DeskTopFooter";

export default function Footer() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:block">
        <DeskTopFooter />
      </div>
    </>
  );
}
