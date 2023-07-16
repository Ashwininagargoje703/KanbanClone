import { Box, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarCard from "./sidebar-card";

export default function Sidebar() {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick2 = (index) => {
    setActiveIndex(index);
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const linkItems2 = [
    {
      iconSrc:
        "https://res.cloudinary.com/dfegprdja/image/upload/v1686991398/kanban-clone/categoryhome_vhynte.png",
      title: "Home",
    },
    {
      iconSrc:
        "https://res.cloudinary.com/dfegprdja/image/upload/v1686992131/kanban-clone/messagemessage_vqupuy.png",
      title: "Messages",
    },
    {
      iconSrc:
        "https://res.cloudinary.com/dfegprdja/image/upload/v1686992159/kanban-clone/task-squaretask_famdek.png",
      title: "Tasks",
    },
    {
      iconSrc:
        "https://res.cloudinary.com/dfegprdja/image/upload/v1686992183/kanban-clone/profile-2usermember_flcctl.png",
      title: "Members",
    },
    {
      iconSrc:
        "https://res.cloudinary.com/dfegprdja/image/upload/v1686992203/kanban-clone/setting-2setting_w2ko99.png",
      title: "Settings",
    },
  ];

  const listItems = [
    {
      bgColor: "#f1eefd",
      bulletColor: "#7AC555",
      title: "Mobile App",
    },
    {
      bgColor: "#f1eefd",
      bulletColor: "#FFA500",
      title: "Website Redesign",
    },
    {
      bgColor: "#f1eefd",
      bulletColor: "#E4CCFD",
      title: "Design System",
    },
    {
      bgColor: "#f1eefd",
      bulletColor: "#76A5EA",
      title: "Wireframes",
    },
  ];
  return (
    <aside className="hidden lg:block overflow-y-auto no-scrollbar ">
      <div
        className="flex flex-col overflow-y-auto border-r px-4 "
        style={{
          paddingTop: "21.2px",
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex justify-between items-center space-x-4 ml-3">
            <img
              alt="kanban app logo"
              src="https://res.cloudinary.com/dfegprdja/image/upload/v1686984252/kanban-clone/colorfilterlogo_q278sk.png"
            />
            <h1 className="font-semibold text-xl ml-8">Project M.</h1>
          </div>
          <div>
            <img
              className="cursor-pointer"
              alt="left arrow icon"
              src="https://res.cloudinary.com/dfegprdja/image/upload/v1686984399/kanban-clone/Group_639arrow_lnjdqc.png"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="overflow-y-auto border-r" style={{ height: "100%" }}>
        <div className="flex flex-col overflow-y-auto px-5 pb-8">
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 px-2  ">
              <div className="space-y-6">
                {linkItems2.map((item, index) => (
                  <Box
                    component="a"
                    href="/#"
                    className={`flex transform items-center rounded-lg px-3 text-[#787486] transition-colors duration-300  ${
                      activeIndex === index
                        ? "bg-gray-100 text-gray-700 border"
                        : ""
                    }`}
                    key={index}
                    onClick={() => handleClick2(index)}
                    sx={{
                      backgroundColor:
                        activeIndex === index ? item.bgColor : "",
                      borderRadius: activeIndex === index ? "8px" : 0,
                      height: activeIndex === index ? 38 : "",
                      border: "none",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                  >
                    <img
                      alt={item.title + " icon"}
                      width="24"
                      height="24"
                      src={item.iconSrc}
                    />
                    <span className="mx-4 text-[#787486] text-[16px] font-medium transition-colors duration-300">
                      {item.title}
                    </span>
                  </Box>
                ))}
              </div>
              <Divider />
              <div className="space-y-1 ">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="px-3 text-xs font-semibold uppercase text-[#787486]">
                      MY PROJECTS
                    </label>
                  </div>
                  <div>
                    <img
                      className="cursor-pointer"
                      alt="add projects icon"
                      src="https://res.cloudinary.com/dfegprdja/image/upload/v1686992628/kanban-clone/add-square_rzvt9e.png"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col overflow-y-auto px-5 ">
          <div className="flex flex-1 flex-col justify-between ">
            <nav className="-mx-3 space-y-6 px-5">
              <ul>
                {listItems.map((item, index) => (
                  <li className="mb-6" key={index}>
                    <Box
                      component="a"
                      href="/#"
                      className={`flex items-center ${
                        clickedIndex === index ? "border" : ""
                      }`}
                      onClick={() => handleClick(index)}
                      sx={{
                        backgroundColor:
                          clickedIndex === index ? item.bgColor : "",
                        borderRadius: clickedIndex === index ? "8px" : 0,
                        fontWeight: clickedIndex === index ? "600" : "500",
                        mb: 2,
                        border: "none",
                        pl: 2,
                        textDecoration: "none",
                        minWidth: 220,
                        "&:hover": {
                          textDecoration: "none",
                        },
                      }}
                    >
                      <span
                        className="inline-block w-6 h-6"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: item.bulletColor,
                          borderRadius: "50%",
                          marginLeft: -9,
                        }}
                      ></span>
                      <span className="text-[#787486] transition-colors duration-300 hover:text-[#0D062D] cursor-pointer ml-6">
                        {item.title}
                      </span>
                      {clickedIndex === index && (
                        <IconButton sx={{ marginLeft: "auto" }}>
                          <MoreHorizIcon />
                        </IconButton>
                      )}
                    </Box>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div style={{ marginTop: -13 }}>
          <SidebarCard />
        </div>
      </div>
    </aside>
  );
}
