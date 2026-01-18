// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const SidebarComp = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   // // Early return
//   // if(!isMenuOpen) return null ;

//   return !isMenuOpen ? (
//     <div className="fixed w-20 h-[calc(100vh-56px)] overflow-y-auto px-2 py-4 bg-white">
//       <div className="flex flex-col my-2">
//         <div className="mx-auto mb-4">
//           <Link to={"/"}>
//             <img src="./home.png" alt="home-icon" className="w-7 h-7" />
//             <span className="text-[10px] font-bold">Home</span>
//           </Link>
//         </div>
//         <div className="mx-auto mb-4">
//           <img src="./clip.png" alt="clips-icon" className="w-7 h-7" />
//           <span className="text-[10px] font-bold">Clips</span>
//         </div>
//         <div className="mx-auto mb-4">
//           <img
//             src="./subscriptions.png"
//             alt="subscription-icon"
//             className="w-7 h-7 mx-auto"
//           />
//           <span className="text-[10px] font-bold">Subscriptions</span>
//         </div>
//         <div className="mx-auto mb-4">
//           <img src="./user-icon.png" alt="user-icon" className="w-7 h-7" />
//           <span className="text-[10px] font-bold">You</span>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="fixed left-0 top-14 w-60 h-[calc(100vh-56px)] overflow-y-auto px-2 py-5 bg-white">
//       <div>
//         <ul className="border-b border-gray-400">
//           <li>
//             <Link to={"/"} className="flex my-2">
//               <img
//                 src="./home.png"
//                 alt="home-icon"
//                 className="w-7 h-7 my-auto mr-3"
//               />
//               <span className="text-sm font-bold my-auto">Home</span>
//             </Link>
//           </li>
//           <li className="flex my-2">
//             <img
//               src="./clip.png"
//               alt="clips-icon"
//               className="w-7 h-7 my-auto mr-3"
//             />
//             <span className="text-sm font-bold my-auto">Clips</span>
//           </li>
//           <li className="flex my-2">
//             <img
//               src="./subscriptions.png"
//               alt="subscription-icon"
//               className="w-7 h-7 my-auto mr-3"
//             />
//             <span className="text-sm font-bold my-auto">Subscriptions</span>
//           </li>
//         </ul>
//         <h1>You ›</h1>
//         <ul className="border-b border-gray-400">
//           <li>Home</li>
//           <li>Shorts</li>
//           <li>Subscriptions</li>
//         </ul>
//       </div>
//       <div className="border-b border-gray-400">
//         <h1>Subscriptions ›</h1>
//         <div className="flex items-center gap-2 ">
//           <img
//             src="./user-icon.png"
//             alt="user-icon"
//             className="w-5 h-5 my-auto rounded-full"
//           />
//           <span>Channel name</span>
//         </div>
//       </div>
//       <div className="border-b border-gray-400">
//         <h1>Explore</h1>
//         <ul>
//           <li>Shopping</li>
//           <li>Music</li>
//           <li>Films</li>
//           <li>Live</li>
//           <li>Gaming</li>
//           <li>News</li>
//           <li>Sport</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarComp;

import React from "react";
import { useSelector } from "react-redux";
import SidebarIcon from "./SidebarIcon";
import SidebarItem from "./SidebarItem";

const SidebarComp = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const Section = ({ title, children }) => (
    <div className="border-b border-gray-200 pb-3 mb-3">
      {title && <h2 className="px-2 py-2 font-semibold">{title}</h2>}
      {children}
    </div>
  );

  return (
    <aside
      className={`fixed left-0 top-14 pt-2 h-[calc(100vh-56px)] bg-white z-40
      ${isMenuOpen ? "w-60" : "w-20"}
      overflow-y-auto transition-all duration-200`}
    >
      {/* COLLAPSED SIDEBAR */}
      {!isMenuOpen && (
        <div className="flex flex-col items-center pt-2 px-3 gap-6">
          <SidebarIcon to="/" img="./home.png" label="Home" />
          <SidebarIcon img="./clip.png" label="Clips" />
          <SidebarIcon img="./subscriptions.png" label="Subs" />
          <SidebarIcon img="./user-icon.png" label="You" />
        </div>
      )}

      {/* EXPANDED SIDEBAR */}
      {isMenuOpen && (
        <div className="px-3 py-2 text-sm">
          <Section>
            <SidebarItem to="/" img="./home.png" label="Home" />
            <SidebarItem img="./clip.png" label="Clips" />
            <SidebarItem img="./subscriptions.png" label="Subscriptions" />
          </Section>

          <Section title="You">
            <SidebarItem img="./user-icon.png" label="Your channel" />
          </Section>

          <Section title="Explore">
            {[
              "Shopping",
              "Music",
              "Films",
              "Live",
              "Gaming",
              "News",
              "Sport",
            ].map((item) => (
              <p
                key={item}
                className="py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </Section>
        </div>
      )}
    </aside>
  );
};

export default SidebarComp;
