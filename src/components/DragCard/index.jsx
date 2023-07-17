import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Button } from "@mui/material";

const DragCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          style={{
            borderRadius: snapshot.isDragging ? "10px" : "",
            border: snapshot.isDragging
              ? "1px dashed rgba(80, 48, 229, 0.59)"
              : "",
            background: snapshot.isDragging ? "rgba(80, 48, 229, 0.06)" : "",
            minHeight: snapshot.isDragging ? "180px" : "",
          }}
        >
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className="flex flex-col bg-white rounded-md p-2 pl-4 pr-4 my-2 max-w-xs"
              style={{
                borderRadius: "16px",
                marginTop: snapshot.isDragging ? "-60px" : "",
              }}
            >
              <div className="flex justify-between my-2 w-full">
                <div>
                  {item?.chip === "Low" && (
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#D58D49",
                        fontFamily: "Inter",
                        fontSize: 12,
                        borderRadius: "6px",
                        backgroundColor: "rgba(223, 168, 116, 0.20)",
                        height: "23px",
                        ":hover": {
                          backgroundColor: "rgba(223, 168, 116, 0.20)",
                        },
                      }}
                    >
                      {item?.chip}
                    </Button>
                  )}
                  {item?.chip === "High" && (
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#D8727D",
                        fontFamily: "Inter",
                        fontSize: 12,
                        borderRadius: "6px",
                        backgroundColor: "rgba(216, 114, 125, 0.10)",
                        height: "23px",
                        ":hover": {
                          backgroundColor: "rgba(216, 114, 125, 0.10)",
                        },
                      }}
                    >
                      {item?.chip}
                    </Button>
                  )}
                  {item?.chip === "Completed" && (
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#68B266",
                        fontFamily: "Inter",
                        fontSize: 12,
                        borderRadius: "6px",
                        backgroundColor: "rgba(131, 194, 157, 0.20)",
                        height: "23px",
                        ":hover": {
                          backgroundColor: "rgba(131, 194, 157, 0.20)",
                        },
                      }}
                    >
                      {item?.chip}
                    </Button>
                  )}
                </div>
                <div>
                  <h6 style={{ fontWeight: 600 }}>...</h6>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h3 className="font-semibold text-lg">{item?.head}</h3>
                </div>
                {item?.taskImage?.length > 0 ? (
                  <div className="flex gap-2">
                    {item?.taskImage?.map((img, ind) => {
                      return (
                        <div key={ind + "img"}>
                          <img alt="task" src={img} className="rounded-md" />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <p className="text-[#787486] " style={{ fontSize: 12 }}>
                      {item?.Task}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-between my-2 gap-3 items-center mt-5">
                <div>
                  <AvatarGroup>
                    {item?.images?.map((item, index) => {
                      return (
                        <Avatar
                          sx={{ width: 24, height: 24 }}
                          alt="Avatar"
                          src={item}
                        />
                      );
                    })}
                  </AvatarGroup>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="flex justify-between gap-2 items-center">
                    <div>
                      <img
                        height="20"
                        width="20"
                        alt="comments icon"
                        src="https://res.cloudinary.com/dfegprdja/image/upload/v1687096433/kanban-clone/message_mkdi8x.png"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-[#787486] whitespace-nowrap">
                        {item?.comments} comments
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <div>
                      <img
                        height="20"
                        width="20"
                        alt="file icon"
                        src="https://res.cloudinary.com/dfegprdja/image/upload/v1687096442/kanban-clone/folder-2_hpqniu.png"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-[#787486] whitespace-nowrap">
                        {item?.files} files
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DragCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
