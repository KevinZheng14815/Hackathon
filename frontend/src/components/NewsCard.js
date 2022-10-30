import React from "react";



const NewsCard = (news) => {
    return (
      <div class="max-w-lg mx-auto ">
        <div class="rounded-lg max-w-sm mb-5 bg-white shadow-sm hover:shadow-2xl ">
          <img
            class="rounded-t-lg"
            src="https://th.bing.com/th/id/OIP.Ao4LZvBt2FMA1TJBkvtsegHaFj?pid=ImgDet&rs=1"
            alt=""
          ></img>
          {/* <div class="rounded-b p-5 bg-violet-300">
           */}
          <div class="rounded-b p-5 bg-blue-100">

            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {news.title}
            </h5>
            <p class="font-normal text-gray-700 mb-3">{news.description}</p>
            <a
              class="text-white bg-black hover:bg-gradient-to-r from-green-400 to-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center"
              href={news.url}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}


export default NewsCard;


