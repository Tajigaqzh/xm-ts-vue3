// const A = (props, { slots }) => (
//     <>
//       <h1>{ slots.default ? slots.default() : 'foo' }</h1>
//       <h2>{ slots.bar?.() }</h2>
//     </>
//   );
   
//   const App = {
//     setup() {
//       const slots = {
//         bar: () => <span>B</span>,
//       };
//       return () => (
//         <A v-slots={slots}>
//           <div>A</div>
//         </A>
//       );
//     },
//   };
   
//   // or
   
//   const App1 = {
//     setup() {
//       const slots = {
//         default: () => <div>A</div>,
//         bar: () => <span>B</span>,
//       };
//       return () => <A v-slots={slots} />;
//     },
//   };
   
//   // or you can use object slots when `enableObjectSlots` is not false.
//   const App2 = {
//     setup() {
//       return () => (
//         <>
//           <A>
//             {{
//               default: () => <div>A</div>,
//               bar: () => <span>B</span>,
//             }}
//           </A>
//           <B>{() => "foo"}</B>
//         </>
//       );
//     },
//   };