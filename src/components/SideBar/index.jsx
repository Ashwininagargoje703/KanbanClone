import { Box, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
      <div className="flex flex-col overflow-y-auto border-r px-5 pb-8">
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
                    backgroundColor: activeIndex === index ? item.bgColor : "",
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
      <div className="flex flex-col overflow-y-auto border-r px-5 ">
        <div className="flex flex-1 flex-col justify-between">
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
                      pr: 2,
                      textDecoration: "none",
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
      <div className="flex flex-col overflow-y-auto border-r px-5 py-16 ">
        <div className="flex flex-1 flex-col justify-between items-center text-center bg-[#f5f5f5] rounded-xl relative p-4">
          <div className="absolute -top-8 h-16 w-16 bg-[#f5f5f5] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2C11.39 1.66 8.88997 2.24 6.97997 3.78C5.05997 5.31 3.96997 7.6 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36Z"
                fill="#FBCB18"
              />
              <path
                d="M15.26 22C15.2 22 15.13 21.99 15.07 21.97C13.06 21.4 10.95 21.4 8.93997 21.97C8.56997 22.07 8.17997 21.86 8.07997 21.49C7.96997 21.12 8.18997 20.73 8.55997 20.63C10.82 19.99 13.2 19.99 15.46 20.63C15.83 20.74 16.05 21.12 15.94 21.49C15.84 21.8 15.56 22 15.26 22Z"
                fill="#FBCB18"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-sm mt-4 mb-3">Thoughts Time</h4>
          <p className="text-[#787486]" style={{ fontSize: 12 }}>
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="mt-5">
            <input
              type="text"
              value={"Write a message"}
              className=" w-4/5 h-12 p-5"
              style={{
                fontSize: 14,
                border: "none",
                borderRadius: "4px",
                height: "40px",
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
