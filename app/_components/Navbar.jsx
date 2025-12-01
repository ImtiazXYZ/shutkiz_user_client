import { getNavbarCategories } from "../_lib/home/product";
import BottomNavbar from "./BottomNavbar";
import Topbar from "./Topbar";
import TopNavbar from "./TopNavbar";
async function Navbar() {
  const categories = await getNavbarCategories();
  return (
    <main className="md:fixed md:bg-white z-50 md:w-full">
      <Topbar />
      <div className="px-5 md:px-10 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto pb-3 pt-1">
        <TopNavbar />
        {/**overflow-x-scroll hide-scrollbar */}
        <BottomNavbar categories={categories} />
      </div>
      <hr />
    </main>
  );
}

export default Navbar;
