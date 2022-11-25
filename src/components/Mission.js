import React from "react";
import'../App.css'

const Mission=()=>{
    return(
        <div>
            <div className="mission">
            <h4>Notre Mission</h4>
            <p>Le terme « produits de santé naturels » désigne les plantes et les autres suppléments fabriqués à partir de sources naturelles et vendus pour prévenir la maladie ou promouvoir la santé. Il en existe de nombreux types.La mission principale  de Nature Beauty est de vous fournir une variété de produits naturels. </p>
        </div>
        <h4  className="mission"> Emplacement</h4>
        <div className="map">
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gueule%20Tap%C3%A9e%20Dakar+(naturalb)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>


        </div>
        </div>
    )

}
export default Mission;