import closeBtnImg from '../../images/icons/close-btn.png';
import emptyCartImg from '../../images/cart-grey.png';
import uniqid from 'uniqid';

const CartPopup = (props) => {
  const { cart } = props;
  const toggleCartPopupBG = (e) => {
    const fadedBg = document.querySelector('.faded-bg');
    const cartPopup = document.querySelector('.cart-popup-container');
    if (e.nativeEvent.path[0] === fadedBg) {
      fadedBg.classList.toggle('faded-bg-active');
      cartPopup.classList.toggle('cart-popup-active');
    }
  };

  const toggleCartPopup = () => {
    const fadedBg = document.querySelector('.faded-bg');
    const cartPopup = document.querySelector('.cart-popup-container');
    fadedBg.classList.toggle('faded-bg-active');
    cartPopup.classList.toggle('cart-popup-active');
  };

  return (
    <div className="faded-bg" onClick={(e) => toggleCartPopupBG(e)}>
      <div className="cart-popup-container">
        <div className="cart-popup-content">
          <img
            className="close-btn cart-close-btn"
            src={closeBtnImg}
            alt="close button"
            onClick={() => toggleCartPopup()}
          />
          <p className="cart-title">Your Cart</p>
          {cart.length === 0 ? (
            <div className="empty-cart-content">
              <p className="empty-cart-text">Your cart is empty</p>
              <img
                className="empty-cart-img"
                src={emptyCartImg}
                alt="Empty Cart"
              />
              <div
                onClick={() => toggleCartPopup()}
                className="cart-continue-shopping-btn continue-shopping-btn"
              >
                <p>Continue Shopping</p>
              </div>
            </div>
          ) : (
            <div className="cart-popup-items-container">
              {cart.map((bike) => {
                return (
                  <div key={uniqid()} className="cart-popup-item">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="cart-popup-bike-img"
                    />
                    <div className="cart-popup-item-content">
                      <p className="cart-popup-title">{bike.type}</p>
                      <p className="cart-popup-name">{bike.name}</p>
                      <div className="cart-popup-qty-container">
                        <p>–</p>
                        <div className="cart-popup-qty">
                          <p>2</p>
                        </div>
                        <p>+</p>
                      </div>
                      <p className="cart-popup-price">{`$${bike.price}.00`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="horizontal-line"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
