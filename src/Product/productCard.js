import './productCard.css'

function ProductCard(props) {
  let products=props.product;

  return (
    <div className="col border" style={{ fontSize: '1.4vw' }}>
      <div className="card h-100 border-0">

        <img src={products.image} className="card-img-top" style={{ height: '16vw', objectFit: 'contain' }} />
        
        <div className="card-body p-2 text-center" style={{ minWidth: 0 }}>
          
          <a className="text-muted small mb-1" >+3 color/patterns</a>
          <p className='small text-muted mt-1'>sponsered</p>
          <h5 className="card-title cardTitle">{products.title}</h5>
          <p className="small mb-1 product-details"> {products.description}</p>

          <div className="text-warning small mb-1 d-flex justify-content-center align-items-center gap-1">
            <img src={`ratings/rating-${products.rating.rate * 10}.png`} style={{ width: '8vw' }}/>
            <span className="text-muted">({products.rating.count})</span>
          </div>

          <div className="mb-1 fw-bold">{products.price}</div>
          <span className="text-success small">Save 50%</span>
          <p className="text-success small mb-0 mt-1">Get it by <strong>Tomorrow</strong></p>
          <p className="text-muted small mb-0">FREE Delivery by <strong>Amazon</strong></p>

          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning mt-3"
              style={{ fontSize: '1.4vw' }}
            >
              Add To Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;