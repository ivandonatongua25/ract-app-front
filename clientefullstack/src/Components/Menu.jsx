import react from 'react';
import Peluches from '../Components/Peluches';
import peluche from './Peluche';
import Usuario from '../Components/Usuarios';
import UsuarioConPeluche from '../Components/UsuarioConPeluche';
function Home(){
    return(
        <div>
            <view>
            <Usuario/>
            <Peluches/>
            <UsuarioConPeluche/>

            

        </view>

        </div>

        
    )
}
export default Home;