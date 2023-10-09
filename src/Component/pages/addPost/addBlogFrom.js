"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const AddPostFrom = () => {
  const { user } = useContext(AuthContext);
  const {replace}=useRouter();
  // add post handler
  const addPostHandler = (e) => {
    e.preventDefault();
    const from = e.target;
    const userName = from?.userName.value;
    const userEmail = from?.userEmail.value;
    const title = from?.title.value;
    const category = from?.category.value;
    const content = from?.content.value;
    const data = {
      userName,
      userEmail,
      title,
      content,
      category,
    };
    // add post to db
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        from.reset();
        replace("/all-posts")
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  return (
    <div className="w-2/4 mx-auto mt-14 p-10 border rounded bg-white shadow-sm">
      <form onSubmit={addPostHandler} className="flex flex-col gap-2">
        <h2 className="text-lg mt-2 mb-1 border-b rounded text-[#516067]">
          User Information
        </h2>
        {/* first row */}
        <div className="grid sm:grid-cols-2 gap-3">
          <label>
            <input
              value={user?.displayName || "unknown"}
              requiblue
              name="userName"
              className="w-full border text-[#516067] bg-blue-50 p-2 rounded focus:bg-white"
            />
          </label>
          <label>
            <input
              value={user?.email}
              requiblue
              name="userEmail"
              className="w-full border text-[#516067] bg-blue-50 p-2 rounded focus:bg-white"
            />
          </label>
        </div>
        <h2 className="text-lg mt-2 mb-1 border-b rounded text-[#516067]">
          Post Information
        </h2>
        {/* second row */}
        <div className="grid sm:grid-cols-5 gap-3">
          <label className="col-span-3">
            <input
              type="text"
              requiblue
              name="title"
              placeholder="Post Title"
              className="w-full border text-[#516067] bg-blue-50 p-2 rounded focus:bg-white"
            />
          </label>
          <label className="col-span-2">
            <select
              name="category"
              className="w-full border text-[#516067] bg-blue-50 p-[10px] rounded focus:bg-white"
            >
              <option value="sort">Sort Post</option>
              <option value="long">Long Post</option>
              <option value="group">Group Post</option>
              <option value="blog">Blog</option>
            </select>
          </label>
        </div>
        {/* forth row */}
        <label>
          <textarea
            cols={50}
            rows={4}
            name="content"
            placeholder="Content"
            className="w-full border text-[#516067] bg-blue-50 p-2 rounded focus:bg-white"
          ></textarea>
        </label>
        <button className="w-full bg-blue-100 hover:bg-blue-200 py-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostFrom;
