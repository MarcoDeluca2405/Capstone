import { Container } from "react-bootstrap"
import ViewAlbumHomeCategory from "./ViewAlbumHomeCategory"
import ViewAlbumHomeRecent from "./ViewAlbumHomeRecent"
import ViewAlbumHomeMore from "./ViewAlbumHomeMore"



const CategoryAlbum=()=>{

    

return(
   
    
    <Container className="bg-dark pt-3 mt-4 CategoryAlbum ">

    <h2 className="text-light text-start ms-2">I più popolari:</h2>
  <ViewAlbumHomeCategory />
    <hr className="text-light text-start ms-2"></hr>

    <h2 className="text-light text-start ms-2">I più recenti:</h2>
    <ViewAlbumHomeRecent />
    <hr className="text-light text-start ms-2"></hr>


    <h2 className="text-light text-start ms-2">Molti Altri:</h2>
    <ViewAlbumHomeMore />
    <hr className="text-light text-start ms-2"></hr>


    </Container>
    
    

)

}

export default CategoryAlbum