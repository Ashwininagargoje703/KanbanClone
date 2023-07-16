import React, { useState } from "react";
import styled from "@emotion/styled";
import { columnsFromBackend } from "../Data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragCard from "../DragCard";

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 329px;
  border-radius: 16px;
  padding: 15px 15px;
  margin-right: 10px;
  margin-left: 15px;
`;

const DropCard = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className="flex flex-col lg:flex-row m-2 min-h-[80px]">
        {Object.entries(columns).map(([columnId, column], index) => {
          const isFirstColumn = index === 0; // Check if it's the first column
          return (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided, snapshot) => (
                <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                      <div>
                        <ul>
                          <li>
                            <span
                              className="inline-block w-6 h-6"
                              style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: column.color,
                                borderRadius: "50%",
                              }}
                            ></span>
                            <span className=" text-[#0D062D] transition-colors duration-300 hover:text-[black] cursor-pointer ml-3">
                              {column?.title}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-[#E0E0E0] rounded-full h-5 w-5 flex justify-center items-center p-3 ml-2">
                        <div style={{ fontSize: 12 }}>
                          {column?.items?.length}
                        </div>
                      </div>
                    </div>
                    {isFirstColumn && (
                      <div className="this-imga">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.2"
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                            fill="#5030E5"
                          />
                          <path
                            d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                            fill="#5030E5"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      borderTop: "3px solid ",
                      borderColor: column.color,
                    }}
                    className=" mt-5"
                  ></div>
                  {column.items.map((item, index) => (
                    <DragCard key={item} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DropCard;
