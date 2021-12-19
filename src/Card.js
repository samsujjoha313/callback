import React from 'react';

const title =" this is the heading three";
const demo = "this is the anoither paragrapg now, so you can login any kind site here";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(){
  return <div className="card">
<h3 className="cardTitle">{title}</h3>
<p className="cardDemo">{demo}</p>
<p className="cardFooter">{dateName + "/" + monthName + "/"+ yearName}</p>
</div>
}

export default Card;