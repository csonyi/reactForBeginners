import React from "react";

import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeName = React.createRef();

  goToStore = (e) => {
    e.preventDefault();

    const storeNameStr = this.storeName.current.value;

    this.props.history.push(`/store/${storeNameStr}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeName}
          placeholder="Store Name"
          defaultValue={getFunName()}
          required
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
