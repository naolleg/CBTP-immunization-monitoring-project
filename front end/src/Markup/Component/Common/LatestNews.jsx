import React from "react";

function LatestNews(props) {
  return (
    <>
        <div class="w-full ">
          <div class="mb-10 w-full">
            <div class="mb-2 overflow-hidden rounded">
              <img src={props.image} alt="image" class="w-full" />
            </div>
            <div>
              <span class=" inline-block text-xs font-semibold text-gray-500 leading-loose ">
                {props.date}
              </span>
              <h3>
                <p
                  href=" "
                  class="mb-3 inline-block text-lg font-semibold  hover:text-primary xl:text-xl leading-4"
                >
                  {props.title}
                </p>
              </h3>
              <p class="text-base text-body-color">{props.detaile}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default LatestNews;
