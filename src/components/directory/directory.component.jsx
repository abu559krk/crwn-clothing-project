import CategoryItem from "../category-item/Category-item-component";
import "./directory.style.scss";
const Directory =({Categories})=>{
    <div className="directory-container">
    {Categories.map((category)=>(
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>

}
export default Directory;