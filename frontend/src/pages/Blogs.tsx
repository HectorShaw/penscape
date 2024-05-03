import React from "react";
import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          <BlogCard
            authorName={"omkar"}
            title={
              "lorem ipsumaophonvl;nvopano l ojdno[anv vijnvonvjanovn;ls v;a;lnv"
            }
            content={
              "  lorem ipsumaophonvl;nvopano l ojdno[anv vijnvonvjanovn;ls v;a;lnv   Founder | 100xdevs Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus numquam saepe nostrum illum obcaecati perferendis dignissimos perspiciatis error possimus qui ab excepturi cupiditate, omnis, tempore, animi eum molestias iste illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum accusantium recusandae fuga nemo delectus, tempora at corporis omnis pariatur architecto nihil tempore reprehenderit, quae est natus animi, aut in!       :LSD"
            }
            publishedDate={"EQW"}
            id={1}
          />
        </div>
      </div>
    </div>
  );
};
