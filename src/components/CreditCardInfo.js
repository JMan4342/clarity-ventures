import { useState } from "react";

export const CreditCardInfo = () => {
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [expityMonth, setExpityMonth] = useState();
  const [expityYear, setExpityYear] = useState();
  const [cvCode, setCvCode] = useState();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Payment Details</h3>
                <div className="checkbox pull-right">
                  <label>
                    <input type="checkbox" />
                    Remember
                  </label>
                </div>
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label for="cardNumber">CARD NUMBER</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder="Valid Card Number"
                        onChange={(e) => (e.target.value = setCreditCardNumber)}
                        required
                        autofocus
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-lock"></span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-7 col-md-7">
                      <div className="form-group">
                        <label for="expityMonth">EXPIRY DATE</label>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityMonth"
                            placeholder="MM"
                            onChange={(e) => (e.target.value = setExpityMonth)}
                            required
                          />
                        </div>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityYear"
                            placeholder="YY"
                            onChange={(e) => (e.target.value = setExpityYear)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label for="cvCode">CV CODE</label>
                        <input
                          type="password"
                          className="form-control"
                          id="cvCode"
                          placeholder="CV"
                          onChange={(e) => (e.target.value = setCvCode)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
