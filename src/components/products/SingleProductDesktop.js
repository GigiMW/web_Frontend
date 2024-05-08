import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";
export default function SingleProductDesktop({product,matches}){
   const [showOptions,setShowOptions] = useState(false);
   const [ProductDetailDialog,showProductDetailDialog, closeProductDetailDialog]
   = useDialogModal(ProductDetail);

const {addToCart,addToCartText}=useCart(product);



   const handleMouseEnter=()=>{
      setShowOptions(true);
   }
  
   const handleMouseLeave=()=>{
      setShowOptions(false);
   }
return(
   <>
   <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <ProductImage src={product.images}/>
    <ProductFavButton isfav={0}>
      <FavoriteIcon/>
    </ProductFavButton>
    {showOptions&&(
    <ProductAddToCart
    onClick={addToCart} 
    show={showOptions} variant="contained">
      {addToCartText}
      </ProductAddToCart>
   )}
 
    <ProductActionsWrapper show={showOptions}>
      <Stack direction="column">
         <ProductActionButton>
            <ShareIcon color="primary"/>
         </ProductActionButton>
         <ProductActionButton onClick={() => showProductDetailDialog()}>
            <FitScreenIcon color="primary"/>
         </ProductActionButton>
      </Stack>
    </ProductActionsWrapper>
 </Product>   
 <ProductMeta product={product} matches={matches} />
 <ProductDetailDialog product={product} />
   </>
 
)

}