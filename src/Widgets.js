import widget from './assets/Widgets.svg';
import "./Widget.css";
import widget2 from './assets/Widget 2.svg';
const Widgets=()=>{
    return(
        <>
        <div className='widget'>
            <img src={widget} alt='wid'/>
            <img src={widget2} alt='wid2' />
        </div>
        </>
    )
}
export default Widgets;