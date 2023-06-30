import { Container } from "react-bootstrap"
import ViewAlbumHome from "./ViewAlbumHome"
import ViewAlbumHomeCategory from "./ViewAlbumHomeCategory"



const CategoryAlbum=()=>{


return(
    <>
    
    <Container className="bg-dark pt-3 mt-4 mb-4">

    <h2 className="text-light text-start ms-2">Category</h2>
    <ViewAlbumHomeCategory />
    <hr className="text-light text-start ms-2"></hr>

    <h2 className="text-light text-start ms-2">Category</h2>
    <ViewAlbumHome />
    <hr className="text-light text-start ms-2"></hr>


    <h2 className="text-light text-start ms-2">Category</h2>
    <ViewAlbumHome />
    <hr className="text-light text-start ms-2"></hr>


    </Container>
    
    </>

)

}

export default CategoryAlbum