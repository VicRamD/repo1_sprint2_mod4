import audifonos from '../../assets/audifonos-pngwing-2.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center relative bg-red-500 rounded-full max-w-125 m-4">
            <img src={audifonos} alt="imagen de audifonos"/>
            <h2 className='absolute text-white text-3xl text-center top-1/3 comic-relief'>Ruta no encontrada - 404 NOT FOUND</h2>
            <div className='absolute bottom-0'>
                <button className='px-8 py-2 bg-blue-400 border-white border-2 border-solid m-2 
                cursor-pointer rounded-lg hover:bg-white hover:text-blue-500' onClick={()=>navigate(-1)}>Volver</button>
                <button className='px-8 py-2 bg-blue-400 border-white border-2 border-solid m-2 
                cursor-pointer rounded-lg hover:bg-white hover:text-blue-500' onClick={()=>navigate('/')}>Inicio</button>
            </div>
        </div>
        
    </div>
  )
}

export default NotFound