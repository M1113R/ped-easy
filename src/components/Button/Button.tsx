import classNames from "classnames";

type Props = {
  variant?: "default" | "dark" | "primary" | "light" | undefined;
  children: React.ReactNode;
};

export function Button({ variant, children }: Props) {
  let bgColor;

  switch (variant) {
    case "dark":
      bgColor =
        "bg-primaryDark hover:bg-primaryLight active:bg-primary transition-all text-white";
      break;
    case "primary":
      bgColor =
        "bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white";
      break;
    case "light":
      bgColor =
        "bg-primaryLight hover:bg-primary active:bg-primaryDark transition-all text-white";
      break;
    default:
      bgColor = "";
      break;
  }

  return (
    <button className={classNames("py-2 px-4 rounded-md font-bold", bgColor)}>
      {children}
    </button>
  );
}
