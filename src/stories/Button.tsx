import { IconType } from "react-icons";
import "../App.css";

type ButtonType = {
  title: string;
  icon?: IconType;
  buttonType?: string;
};

export default function Button({
  title,
  icon: Icon,
  buttonType: btnClassName,
}: ButtonType) {
  return (
    <button className={btnClassName}>
      {Icon && <Icon className="mr-2" />}
      {title}
    </button>
  );
}
