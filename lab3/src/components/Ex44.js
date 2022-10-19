import { logDOM } from "@testing-library/react";
import { Avatar, Card } from "antd";
import React from "react";

const { Meta } = Card;

const Ex44 = () => {
  const card = {
    title: "adu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, saepe excepturi neque dolore dolor voluptatem. Pariatur ut modi deleniti porro placeat officiis facere perferendis rerum, dignissimos beatae. Fuga, explicabo porro!",
    avatar: "https://picsum.photos/200/300",
    cover:
      "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
  };
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Meta
         avatar={<Avatar src={card.avatar}/>}
        title={card.title}
        description={card.description}
        cover={<img alt="example" src={card.cover} />}
      />
    </Card>
  );
};

export default Ex44;
