import Header from "../../components/Header";
import DropCard from "../../components/MainDrop/Index";
import Sidebar from "../../components/SideBar";
import SubHeader from "../../components/SubHeader";

function MainPage() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <SubHeader />
        <DropCard />
      </div>
    </div>
  );
}

export default MainPage;
