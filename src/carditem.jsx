function CardItem(props){
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    {/* <div class="fw-bold">Subheading</div> */}
                    {/* ------------------------------------- */}
                    {/* <div class="fw-bold">{props.data.title}</div> */}
                    {/* ----------------------------------------------------- */}
                    <div class="fw-bold">{props.data.title}</div>
                     Rs. {props.data.price}
                    
                  </div>
                  {/* <span class="badge bg-primary rounded-pill">14</span> */}
                  <span onClick={() => props.handleRemoveCart(props.data.id)} class="badge bg-primary rounded-pill">X</span>
  
                </li>
    )
  }
  export default CardItem ;