import React, { Component } from 'react';
import './item-list.css';
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi-service";
import { withData } from '../hoc-helpers';




 const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};



export default ItemList;









/*const  f = () => {
  return class extends Component{

componentDidMount() {
  console.log(this.props);
}

    render() {
      return   <p>Hi</p>;


    }
  };
};

export default f();*/