import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";
export default function SingleProduct({product,matches}){

   const [ProductDetailDialog,showProductDetailDialog, closeProductDetailDialog]
   = useDialogModal(ProductDetail);

   const {addToCart,addToCartText}=useCart(product);
return(
   <>
   <Product>
    <ProductImage src={product.images}/>
    <ProductMeta product={product} matches={matches} />
    <ProductActionsWrapper>
      <Stack direction="row">
         <ProductFavButton isfav={1}>
            <FavoriteIcon/>
         </ProductFavButton>
         <ProductActionButton>
            <ShareIcon color="primary"/>
         </ProductActionButton>
         <ProductActionButton onClick={() => showProductDetailDialog()}>
            <FitScreenIcon color="primary"/>
         </ProductActionButton>
      </Stack>
    </ProductActionsWrapper>
 </Product>   
 <ProductAddToCart onClick ={addToCart}
 variant="contained">{addToCartText}</ProductAddToCart>
 <ProductDetailDialog product={product} />
   </>
 
)

}