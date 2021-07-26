import "./taskItem.css";
import taskItem from "./taskItem.html";
import taskItemDone from "./taskItemDone.html";

export default {
  title: "Components/TaskItem",
  parameters: { layout: "fullscreen" },
};

export const taskItemExp = () => taskItem;
export const done = () => taskItemDone;