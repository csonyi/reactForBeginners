import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import { formatPrice } from "../helpers";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.objectOf(
      PropTypes.shape({
        desc: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.number,
      })
    ),
    order: PropTypes.objectOf(PropTypes.number),
    deleteFromOrder: PropTypes.func,
  };

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: {
        enter: 500,
        exit: 500,
      },
    };
    if (!fish) return null;
    if (isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={transitionOptions.timeout}
                >
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name}
              <span className="price">{formatPrice(count * fish.price)}</span>
              <button onClick={() => this.props.deleteFromOrder(key)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          Sorry, {fish ? fish.name : "fish"} is no longer available.
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const order = this.props.order;
    const fishes = this.props.fishes;
    const total = orderIds.reduce((priceSum, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === "available";
      return isAvailable ? priceSum + count * fish.price : priceSum;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
