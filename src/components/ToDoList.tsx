import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     setToDoError("");
//     setTodo(e.currentTarget.value);
//   };

//   const onSumbmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (todo.length < 10) {
//       return setToDoError(" To do should be longer");
//     }

//   };
//   return (
//     <div>
//       <form onSubmit={onSumbmit}>
//         <input onChange={onChange} value={todo} placeholder="write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo")} placeholder="write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
