// import React, { useEffect, useState } from "react";
// // import { useState } from "framer-motion";
// import * as Select from "@radix-ui/react-select";
// import classnames from "classnames";
// import { Slot } from "@radix-ui/react-slot";
// import { CgChevronUp, CgCheck, CgChevronDown } from "react-icons/cg";

// const SelectDemo = ({ onchang, mapper }) => {
//   const [value, setValue] = useState("");
//   function handleChange() {
//     onchang(value);
//   }
//   return (
//     <Select.Root>
//       <Select.Trigger className="SelectTrigger" aria-label="Food">
//         <Select.Value placeholder="Select a fruit…" />
//         <Select.Icon className="SelectIcon">
//           <CgChevronDown />
//         </Select.Icon>
//       </Select.Trigger>
//       <Select.Portal>
//         <Select.Content className="SelectContent">
//           <Select.ScrollUpButton className="SelectScrollButton">
//             <CgChevronUp />
//           </Select.ScrollUpButton>
//           <Select.Viewport className="SelectViewport">
//             <Select.Group>
//               <Select.Label className="SelectLabel">Fruits</Select.Label>

//               {mapper.map((item) => {
//                 return;
//                 <SelectItem value={`${item}`} onPointerDown={(e)=>{setValue(e.taf)}}>Apple</SelectItem>;
//               })}
//             </Select.Group>
//           </Select.Viewport>
//           <Select.ScrollDownButton className="SelectScrollButton">
//             <CgChevronDown />
//           </Select.ScrollDownButton>
//         </Select.Content>
//       </Select.Portal>
//     </Select.Root>
//   );
// };
// const SelectItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item
//         className={classnames("SelectItem", className)}
//         {...props}
//         ref={forwardedRef}
//       >
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="SelectItemIndicator">
//           <CgCheck />
//         </Select.ItemIndicator>
//       </Select.Item>
//     );
//   }
// );

// export default SelectDemo;
