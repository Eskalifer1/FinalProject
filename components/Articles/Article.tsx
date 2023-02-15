import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const Article: React.FC<PropsType> = ({ image, date, title, description }) => {
  return (
    <div>
      <Link href={"#"}>
        <Card hoverable className="font-[Chivo] text-center">
          <div className="relative w-full mb-2 h-[250px]">
            <Image
              src={image}
              alt="Title Image"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <p className="mb-2.5">{date}</p>
          <h3 className="text-xl mb-2.5">{title}</h3>
          <p>{description}</p>
        </Card>
      </Link>
    </div>
  );
};

export default Article;
