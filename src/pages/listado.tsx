import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPokemons } from '../controler/getpopkemon';
import { Pokemon } from '../models/pockemon.m';
import Figure from 'react-bootstrap/Figure';


const Listados = () => {
    
    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery] = useState("");

    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();

    });

    const filtrarPokemons = pokemons?.slice(0,151).filter((pokemon)  => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());

    });

    return (
        <>
            <h1>Pokemon</h1>
            <header>
                <input 
                    value={query}
                     placeholder='Buscar Pokemons'
                     onChange={(event) => setQuery(event.target.value.trim()) }
                     type = "text"
                />
            </header>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">
                        {filtrarPokemons?.slice(0,151).map((pokemons)=>(
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header>Tipo:  {pokemons.id} - {pokemons.type}</Card.Header>
                                <Card.Img  variant="top" src={pokemons.imggif} className='d-block mx-auto w-25' />
                                <Card.Body>
                                    <Card.Title className="text-center">{pokemons.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                            />
                                            <b> HP:</b> {pokemons.hp}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/297/297837.png"
                                            />
                                            <b> Ataque:</b> {pokemons.attack}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/7870/7870573.png"
                                            />
                                            <b> Defensa:</b> {pokemons.defense}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://t4.ftcdn.net/jpg/05/41/15/89/240_F_541158985_CaW8EghMihrnf8R3u6uJnm6ARIv713Nx.jpg"
                                            />
                                            <b> E.Ataques:</b> {pokemons.sp_atk}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/3199/3199328.png"
                                            />
                                            <b> E.Defensa:</b> {pokemons.sp_def}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/869/869121.png"
                                            />
                                            <b> Velocidad:</b> {pokemons.speed}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>



        </>
    )

}

export default Listados
