import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Blend(props){
            // console.log(props.blend)
            return(
                        <div className="single-blend" key={props.blend.id}>
                            <div className="info">
                                        <h4>{props.blend.name} Blend</h4>
                                        <h5>Good For {props.blend.use_case}</h5>
                                        <ul className="oils-list">
                                          {props.blend.oilsList.map(oil => <li key={oil}>{oil}</li>)}
                                        </ul>
                             </div>
                             <div className="actions">
                                    <button onClick={( ) => props.onRemoveBlend(props.blend.id)}><FontAwesomeIcon icon={['far', 'trash-alt']}/></button>
                              </div>
                        </div>
            )
}

export default Blend;
