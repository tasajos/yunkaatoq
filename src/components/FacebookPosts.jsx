import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import Face from "../assets/face.png";

function FacebookPosts() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="lg:bg-[url('../src/assets/rectangle.png')] bg-cover h-[50vh] sm:h-[100%] sm:mx-[0] md:w-[80%] mx-auto w-[350px]">
        <div className="flex justify-between p-8 ">
          <div className="flex">
            <img className="w-[45px]" src={Face} alt="face" />
            <h1 className="text-white text-4xl ml-5">Yunka Atoq</h1>
          </div>
          <div>
            <AiOutlineLike className="text-[35px] text-white " />
          </div>
        </div>

        <div className="flex justify-center items-center pb-10 ">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyunkabo&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=642162545974765"
            width="400"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowFullScreen="true"
            allow="
              autoplay;
              clipboard-write;
              encrypted-media;
              picture-in-picture;
              web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FacebookPosts;