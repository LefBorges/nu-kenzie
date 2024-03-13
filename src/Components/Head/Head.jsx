import NuKenzie from "../../assets/Property 1=secondary.svg"
import { Headerstyle } from "./Head";


const header = () =>{
    return(
        <Headerstyle>
            <img src={NuKenzie} alt="LogoNuKenzie" />
        </Headerstyle>
    )
}
export default header;