import { RxDashboard, RxCalendar, RxChatBubble } from "react-icons/rx";
import { MdTaskAlt } from "react-icons/md";
import { BiCog } from "react-icons/bi";

export const menuItems = [
  {
    name: "Dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    name: "Task",
    icon: <MdTaskAlt />,
    path: "/task",
  },
  {
    name: "Calender",
    icon: <RxCalendar />,
    path: "/calender",
  },
  {
    name: "Chat",
    icon: <RxChatBubble />,
    path: "/chat",
  },
  {
    name: "Settings",
    icon: <BiCog />,
    path: "/settings",
  },
];
