import React, { Fragment } from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
   //lista com nome dos satélites
   const names = ['a', 'b', 'c', 'd']
   const satellites = names.map((n) =>
      <li>Satélite {n}</li>
   )
   
   let title;
   if (props.title_with_underline) {
      title = <h4><u>{props.name}</u></h4>
   }else{
      title = <h4>{props.name}</h4>
   }


   return (
      <Fragment>
         <h4>{title}</h4>
         <DescriptionWithLink description={props.description} link={props.link} />
         <GrayImg img_url={props.img_url} gray={props.gray}/>        
         <hr/>
      </Fragment>




   )
}

export default Planet;