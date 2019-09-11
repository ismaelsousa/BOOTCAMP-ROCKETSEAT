import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice} from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: [],
  };
  async componentDidMount(){
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price)
    }))
    this.setState({products: data})
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props
    addToCartRequest(id)
  }
  render(){

    const { products } = this.state
    const { amount } = this.props

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button type="button" onClick={ ()=> this.handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}

      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product)=>{
    amount[product.id] = product.amount
    return amount
  }, {}),
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home)
