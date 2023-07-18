import { UiBlog } from "../../uikit/ui-blog";
import blogPhoto1 from "./image/image 2.png";
export function CardLately({ className }) {
  return (
    <UiBlog type="horizontally">
      <UiBlog.Img>
        <img className="" src={blogPhoto1} alt="" />
      </UiBlog.Img>
    </UiBlog>
  );
}
