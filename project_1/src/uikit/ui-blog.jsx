import clsx from "clsx";
import blogImage from "./image/notebook.png";

/**
 *
 * @param {{
 * type: 'vertical' | 'horizontally' | 'banner'
 * }} props
 * @returns
 */

export function UiBlog({ className, type = "vertical", blogInfo }) {
  return (
    <div
      className={clsx(
        " shadow-md rounded-md flex overflow-hidden relative ",
        className,
        {
          vertical: "min-h-[400px] w-[300px] flex-col",
          horizontally: "w-full mx-auto h-[243px]",
          banner: "h-[500px] w-full mx-auto",
        }[type]
      )}
    >
      <div
        className={clsx(
          " relative overflow-hidden w-full h-full ",
          {
            vertical: "flex-[0_0_180px] order-1",
            horizontally: "flex-[0_0_430px] order-2",
            banner: "flex-[0_0_525px] order-2 ",
          }[type]
        )}
      >
        <img className="w-full h-full object-cover" src={blogImage} alt="" />
      </div>
      <div
        className={clsx(
          "flex flex-col ",
          {
            vertical: " px-4 pt-4 pb-6 flex-[1_0_auto] order-2",
            horizontally: "py-10 pl-[54px] pr-16 order-1",
            banner: "px-16 pt-[98px] pb-[118px]",
          }[type]
        )}
      >
        {/*  */}
        <div
          className={clsx(
            "text-secodary-800 leading-tight ",
            {
              vertical: "text-xl mb-4",
              horizontally: "text-3xl mb-6",
              banner: "text-[40px] mb-5",
            }[type]
          )}
        >
          What is Lorem Ipsum?
        </div>
        <div
          className={clsx(
            " text-secodary-600 text-sm leading-tight ",
            {
              vertical: "line-clamp-5",
              horizontally: "line-clamp-3",
              banner: "line-clamp-6",
            }[type]
          )}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that
        </div>
        <div className=" flex justify-between mt-auto">
          <div className="text-secodary-600 text-xs leading-tight">
            May 20th 2020
          </div>
          <div className="text-secodary-800 text-xs leading-tight font-bold">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
}

// import clsx from "clsx";
// import React, { createContext, useContext } from "react";
// /**
//  *
//  * @param {{
//  * type: 'vertical' | 'horizontally'
//  * }} props
//  * @returns
//  */

// const UiBlogContext = createContext();

// export function UiBlog({ className, children, type = "vertical" }) {
//   return (
//     <UiBlogContext.Provider value={type}>
//       <div
//         className={clsx(
//           " shadow-md rounded-md  flex relative overflow-hidden",
//           {
//             vertical: "min-h-[380px] w-[300px]  flex-col",
//             horizontally: "h-[240px] max-w-[960px] w-full mx-auto ",
//           }[type],
//           className
//         )}
//       >
//         {children}
//       </div>
//     </UiBlogContext.Provider>
//   );
// }

// UiBlog.Img = function UiBlogImg({ className, children }) {
//   const type = useContext(UiBlogContext);
//   console.log(type);
//   return (
//     <div
//       className={clsx(
//         " relative overflow-hidden object-contain w-full h-full",
//         className,
//         {
//           vertical: "min-h-[380px] w-[300px]  flex-col",
//           horizontally: "CDNKJSNCKJNSDK",
//         }[type]
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// UiBlog.Header = function UiBlogHeader({ className, children }) {
//   return (
//     <div
//       className={clsx(
//         "text-secodary-800 text-xl leading-tight mb-4",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };
// //
// UiBlog.Body = function UiBlogBody({ children, className }) {
//   return (
//     <div
//       className={clsx(
//         "flex flex-col flex-[1_0_auto] px-4 pt-4 pb-6",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// UiBlog.Descr = function UiBlogDescr({ children, className }) {
//   return (
//     <div
//       className={clsx(
//         " bloxk text-secodary-600 text-sm leading-tight line-clamp-5 ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// UiBlog.Footer = function UiBlogFooter({ className, children }) {
//   return (
//     <div className={clsx(" flex justify-between mt-auto", className)}>
//       {children}
//     </div>
//   );
// };

// import blogImage from "./image/notebook.png";

// export function UiBlog({ className }) {
//   return (
//     <div className="min-h-[380px] w-[300px] shadow-md rounded-md  flex flex-col relative overflow-hidden">
// <div className="flex-[0_0_180px] relative overflow-hidden object-contain">
//   <img src={blogImage} alt="" />
// </div>
//       <div className="flex flex-col flex-[1_0_auto] px-4 pt-4 pb-6">
// <div className="text-secodary-800 text-xl leading-tight mb-4">
//   long established
// </div>
// <div className=" bloxk text-secodary-600 text-sm leading-tight line-clamp-5 ">
//   It is a long established fact that a reader will be distracted by the
//   readable content of a page when looking at its layout. The point of
//   using Lorem Ipsum is that It is a long established fact that a reader
//   will be distracted by the readable content of a page when looking at
//   its layout. The point of using Lorem Ipsum is that....It is a long
//   established fact that a reader will be distracted by the readable
//   content of a page when looking at its layout. The point of using Lorem
//   Ipsum is that....
// </div>
//   <div className=" flex justify-between mt-auto">
//     <div className="text-secodary-600 text-xs leading-tight">
//       May 20th 2020
//     </div>
//     <div className="text-secodary-800 text-xs leading-tight font-bold">
//       Read more
//     </div>
//   </div>
// </div>
//     </div>
//   );
// }
