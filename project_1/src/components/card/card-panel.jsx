import { UiBlog } from "../../uikit/ui-blog";
import blogPhoto1 from "./image/image 2.png";

export function CardPanel({ className, blogInfo }) {
  return (
    <UiBlog>
      <UiBlog.Img>
        <img
          className="w-full h-full object-cover"
          src={blogPhoto1}
          alt="noteBook"
        />
      </UiBlog.Img>
      <UiBlog.Body>
        <UiBlog.Header>long established</UiBlog.Header>
        <UiBlog.Descr>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is thatIt is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that
        </UiBlog.Descr>
        <UiBlog.Footer>
          <div className="text-secodary-600 text-xs leading-tight">
            May 20th 2020
          </div>
          <div className="text-secodary-800 text-xs leading-tight font-bold">
            Read more
          </div>
        </UiBlog.Footer>
      </UiBlog.Body>
    </UiBlog>
  );
}
