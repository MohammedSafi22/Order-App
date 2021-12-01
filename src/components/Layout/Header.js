import foodImage from '../../assets/order.jpg';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';


const Header =props => {
    return(
        <div>
           <header className="header">
               <h1>React Meals</h1>
               <HeaderCartButton onClick={props.onShowCart} />
           </header>
           <div className="main-image">
               <img src={foodImage} alt="table of food" />
           </div>
        </div>
    )
 
}
export default Header;