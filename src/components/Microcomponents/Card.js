import React from 'react'
import { Link } from 'react-router-dom'


const Card = (link,title,image)=>{
    return(
        <div className="col-md-3 mb-4">
        <Link to={link}>
          <div className="card" >
            <img src={image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="btn btn-lg btn-block btn-success">{title}</h5>
            </div>
          </div>
          </Link>
        </div>
    )
}

export default Card