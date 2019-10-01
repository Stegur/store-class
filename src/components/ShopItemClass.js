import React from 'react'
import PropTypes from 'prop-types';


class ShopItemClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;

        return (
            <>
                <div className="main-content">
                    <h2>{item.brand}</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div className="description">
                        {item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile "><div className="hightlight-overlay"></div></div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{item.currency}{item.price.toFixed(2)} </div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </>
        )
    }
}

ShopItemClass.propTypes = {
    shopItem: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string,
    })
}

export default ShopItemClass;