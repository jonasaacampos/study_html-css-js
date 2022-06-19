import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
   if (props.link) {
      return (
         <Fragment>
            <p>{props.description}</p>
            <p>
               <a href={props.description}>{props.link}</a>
            </p>

         </Fragment>
      )
   } else {
      return (
         <Fragment>
            <p><em>{props.description}</em></p>
         </Fragment>
      )
   }



}

export default DescriptionWithLink;