import { useContext,useEffect ,useState } from 'react';
import CartContext from '../../store/cart-context';
import './HeaderCartButton.css';
import { IoCartOutline } from "react-icons/io5";
const HeaderCartButton = props => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
 const cartCtx= useContext(CartContext);
 const {items} = cartCtx;
 const numberOfCartItems=items.reduce((curNumber,item)=>{
   return curNumber + item.amount;
 },0);
 const btnClasses =`${"button"} ${btnIsHighLighted?"bump":""}`;
 useEffect(()=>{
   if(items.length===0){
     return ;
   }
   setBtnIsHighLighted(true);
  const timer= setTimeout(()=>{
     setBtnIsHighLighted(false);
   },300);
   return()=>{
     clearTimeout(timer);
   };
 },[items])
  return(
      <button className={btnClasses} onClick={props.onClick}>
          <span className="icon">  
             <IoCartOutline />
          </span>
          <span>your cart</span>
          <span className="badge">{numberOfCartItems}</span>
      </button>
  );
}

export default HeaderCartButton;