import { v4 as uuidv4 } from "uuid";
import img from "../Assests/img1.jpeg";
export const data = [
  {
    id: "1",
    chip: "Low",
    head: "Brainstorming",
    Task: "Brainstorming brings team members' diverse experience into play",
    comments: "12",
    files: "0",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
  {
    id: "2",
    chip: "High",
    head: "Research",
    Task: "User research helps you to create an optimal product for users.",
    comments: "10",
    files: "3",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
  {
    id: "3",
    chip: "High",
    head: "Wireframes",
    Task: "Low fidelity wireframes include the most basic content and visuals.",
    comments: "6",
    files: "5",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
];
export const data1 = [
  {
    id: "4",
    chip: "Low",
    head: "Onboarding Illustrations ",
    comments: "14",
    taskImage: [
      "https://i.ibb.co/fnm7W7p/Whats-App-Image-2023-07-16-at-11-52-08-AM.jpg",
    ],
    files: "15",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
  {
    id: "10",
    chip: "Completed",
    head: "Mobile App Design",
    comments: "12",
    taskImage: [
      "https://i.ibb.co/5jnHdCZ/Whats-App-Image-2023-07-16-at-11-52-31-AM.jpg",
    ],
    files: "15",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png",
    ],
  },
  {
    id: "5",
    chip: "High",
    head: "Research",
    Task: "User research helps you to create an optimal product for users.",
    comments: "10",
    taskImage: [
      "https://i.ibb.co/jVW5KgQ/Whats-App-Image-2023-07-16-at-11-53-05-AM.jpg",
      "https://i.ibb.co/xFXJjLd/Whats-App-Image-2023-07-16-at-11-52-53-AM.jpg",
    ],
    files: "3",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
];
export const data2 = [
  {
    id: "8",
    chip: "Completed",
    head: "Research",
    Task: "User research helps you to create an optimal product for users.",
    comments: "10",
    files: "3",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
  {
    id: "9",
    chip: "Completed",
    head: "Wireframes",
    Task: "Low fidelity wireframes include the most basic content and visuals.",
    comments: "6",
    files: "5",
    images: [
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png",
      "https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png",
    ],
  },
];
export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To Do",
    items: data,
    color: "#5030E5",
  },
  [uuidv4()]: {
    title: "On Progress",
    items: data1,
    color: "#FFA500",
  },
  [uuidv4()]: {
    title: "Done",
    items: data2,
    color: "#8BC48A",
  },
};
