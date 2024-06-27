import FirstImage from './FirstImage.jpg';
import './index.css';

function Action(){
    return(
        <div class="guide">
<div class="guide-content">
    <h1 class="Text"> Uni's Collection </h1>
    <h1> A simple guide <br></br> to Minimalist style </h1>
    <button> SHOP NOW </button>
</div>
<div class="guide-image">
    <img src={FirstImage} alt='Man wearing denim jacket'></img>
</div>
</div>

)

}
 export default Action;

