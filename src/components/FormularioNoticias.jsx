import { Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import ListaNoticias from './ListaNoticias';



const FormularioNoticias = () => {
     //pub_374711e79b54a5d8e28ce262a2ae770ff0fea
    //pub_37483ff3d4d2ec0c099a81f2f3715e4f4d1b0
    const apiKey = "pub_37483ff3d4d2ec0c099a81f2f3715e4f4d1b0"
    const [noticias, setNoticias] =useState ([])
    const [categoria, setCategoria] = useState("business");
    const [pais, setPais] = useState("us");

useEffect(()=>{
    consultarAPI();
    
    },[categoria, pais]);
    
    const consultarAPI = async()=>{
    const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=${categoria}&country=${pais}`)
   
    const datos = await respuesta.json()
    console.log(datos)
    setNoticias(datos.results)
    }
    const handleChange = (e) => {
        setCategoria(e.target.value);
       
      };
      const handleChange2 = (e) => {
        
        setPais(e.target.value);
      };
    return (
        <div>
            <section>
            <h1 className='bg-body-secondary m-4 p-4'>Buscar por categorias
            <Form.Select onChange={handleChange} aria-label="Default select example" value={categoria}>
     
        <option >Elgige una categoria</option>
       <option value="business">Negocios</option>       
       <option value="food">Comida</option>
       <option value="technology">Tecnologia</option>
       <option value="politics">Politica</option>
       <option value="sports">Deportes</option>
     </Form.Select>
     <Form.Select onChange={handleChange2} aria-label="Default select example" value={pais}>
     
     <option >Elgige una categoria</option>
    <option value="ar">Argentina</option>
    <option value="us">Estados Unidos</option>
    <option value="pt">Portugal</option>
    <option value="es">España</option>
    <option value="jp">Japon</option>
 
  </Form.Select>
     </h1>
      </section>

            <ListaNoticias noticias={noticias}></ListaNoticias>
        </div>
    );
};

export default FormularioNoticias;