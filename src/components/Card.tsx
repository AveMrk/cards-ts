import React from "react";

interface CardProps {
  children: React.ReactNode;
  img?: string;
}
export default function Card(props: CardProps) {
  const {children, img} = props;
  return (
    <div className="card">
      {img && <img src={img} className="card-img-top" alt="фото"/>}
      <div className="card-body">{children}</div>
    </div>
  );
}