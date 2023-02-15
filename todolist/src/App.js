// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   // const [isEdit, setIsEdit] =useState(false)
//   const [list, setlist] = useState([]);
//   const [value, setvalue] = useState({});
//   const handleChange = (e) => {
//     setvalue({ id: Date.now(), name: e.target.value, isEdit: false });
//   };
//   const enter = (e) => {
//     if (e.key === 'Enter') {
//       setlist([value, ...list]);
//     }
//     setvalue({ name: '' });
//   };
//   const [filter, setFilter] = useState('');
//   const filterChange = (e) => {
//     setFilter(e.target.value);
//   };
//   console.log('value', value);
//   console.log('list', list);
//   return (
//     <>
//       <div>Todolist</div>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         value={value.name}
//         onKeyDown={enter}
//       />
//       <button
//         type="button"
//         onClick={(e) => {
//           console.log('click');
//           setlist([value, ...list]);
//           setvalue('');
//         }}
//       >
//         送出
//       </button>
//       <p>篩選</p>
//       <input type="text" value={filter} onChange={filterChange} />
//       <button
//         onClick={() => {
//           const newlist = list.filter((v) => {
//             return v.includes(filter);
//           });
//           setlist(newlist);
//         }}
//       >
//         留下
//       </button>
//       <button
//         onClick={() => {
//           const newlist = list.filter((v) => {
//             return !v.includes(filter);
//           });
//           setlist(newlist);
//         }}
//       >
//         刪除
//       </button>
//       <ul>
//         {list.map((v, i) => {
//           return (
//             <>
//               <li key={v.id}>
//                 <p className={v.isEdit ? 'd-none' : 'd-block'}>{v.name}</p>
//                 <input
//                   className={v.isEdit ? 'd-block' : 'd-none'}
//                   onBlur={(e) => {
//                     const newlist = [...list];
//                     newlist.map((v2, i2) => {
//                       if (v.id === v2.id) {
//                         v2.name = e.target.value;
//                         v2.isEdit = false;
//                         setlist(newlist);
//                       }
//                     });
//                   }}
//                   // value={v.name}
//                 />
//                 <button
//                   onClick={() => {
//                     const newlist = list.filter((v1) => {
//                       console.log('v.id, v1.id', v.id, v1.id);
//                       return v.id !== v1.id;
//                     });
//                     setlist(newlist);
//                   }}
//                 >
//                   刪除
//                 </button>

//                 <button
//                   onClick={() => {
//                     const newlist = [...list];
//                     newlist.map((v3, i3) => {
//                       if (v.id === v3.id) {
//                         v3.isEdit = true;
//                       }
//                     });
//                     // console.log('neelist', newlist);
//                     setlist(newlist);
//                   }}
//                 >
//                   更新
//                 </button>
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// const App = () => {
//   // const [list, setList] = useState([]);
//   // const [value, setvaule] = useState({});
//   // return (
//   //   <>
//   //     <input
//   //       type="text"
//   //       onChange={(e) => {
//   //         setvaule({ id: Date.now(), name: e.target.value, isE: false });
//   //       }}
//   //       value={value.name}
//   //     />
//   //     <button
//   //       onClick={() => {
//   //         setList([...list, value]);
//   //         setvaule({ id: Date.now(), name: '', isE: false });
//   //       }}
//   //     >
//   //       送
//   //     </button>
//   //     <ul>
//   //       {list.map((v, i) => {
//   //         return (
//   //           <>
//   //             <li key={v.id}>{v.name}</li>
//   //             <button
//   //               onClick={() => {
//   //                 const newlist = list.filter((v1) => {
//   //                   return v.id !== v1.id;
//   //                 });
//   //                 setList(newlist);
//   //               }}
//   //             >
//   //               刪除
//   //             </button>
//   //             <button
//   //               className={v.isE ? 'd-none' : 'd-block'}
//   //               onClick={() => {
//   //                 const n = [...list];
//   //                 n.map((v3, i) => {
//   //                   if (v === v3) {
//   //                     v3.isE = true;
//   //                   }
//   //                 });
//   //                 setList(n);
//   //               }}
//   //             >
//   //               修改
//   //             </button>
//   //             <input
//   //               className={v.isE ? 'd-block' : 'd-none'}
//   //               type="text"
//   //               onBlur={(e) => {
//   //                 const n = [...list];
//   //                 n.map((v2, i2) => {
//   //                   if (v === v2) {
//   //                     v2.name = e.target.value;
//   //                     v2.isE = false;
//   //                     setList(n);
//   //                   }
//   //                 });
//   //               }}
//   //             />
//   //           </>
//   //         );
//   //       })}
//   //     </ul>
//   //   </>
//   // );
// };

// export default App;
import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [list, setList] = useState(['嗨']);
  const [note, setNote] = useState('');
  return (
    <>
      <input
        type="text"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          let newList = [...list];
          newList.push(note);
          setList(newList);
          console.log(newList);
        }}
      >
        送出
      </button>
      {console.log(list)}

      <ul>
        {list.map((note, index) => {
          <li>{note.value}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
