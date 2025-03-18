import { ReactNode } from "react";


type CardsProps = {
  title: string,
  children: ReactNode,
  imgSrc?: string
};

type CardImageProps = {
  imgSrc?: string
}

function CardImage({imgSrc}: CardImageProps) {
  return imgSrc ? <img src={imgSrc} className="card-img-top" alt="" /> : "";
}

export const Cards = function({title, children, imgSrc}: CardsProps) {
  return (
    <div className="card">
      <CardImage imgSrc={imgSrc} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};
