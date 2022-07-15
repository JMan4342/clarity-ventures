import { useState } from "react";

export const CartItem = () => {
  const [quantity, setQuantity] = useState();

  const quantityChange = (e) => {
    const value = e.target.value;
    setQuantity = value;
  };

  const removeFromCart = () => {};

  return (
    <div className="panel-body">
      <div className="row">
        <div className="col-xs-2">
          <img
            className="img-responsive"
            src="http://placehold.it/100x70"
            alt="product image"
          />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>Product name</strong>
          </h4>
          <h4>
            <small>Product description</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                25.00 <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <input
              type="number"
              min="0"
              className="form-control input-sm"
              value={quantity}
              onChange={quantityChange}
            />
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-link btn-xs"
              onClick={() => removeFromCart()}
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
