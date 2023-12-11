import { toast } from "react-toastify";

type ToastType = "success" | "warning" | "error" | "info";

export const ShowToast = (text: string, type: ToastType): void => {
  switch (type) {
    case "success":
      toast.success(text, { bodyClassName: "successBody" });
      break;
    case "error":
      toast.error(text, {
        bodyClassName: "errorBody",
      });
      break;
    case "warning":
      toast.warning(text, {
        bodyClassName: "warningBody",
      });
      break;
    default:
      toast.info(text, {
        bodyClassName: "infoBody",
      });
  }
};
