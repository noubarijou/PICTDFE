// import React from 'react'
import Header from "../../components/Header";
import useAxios from "../../Hooks/useAxios";

const Home = () => {

    const jogos = useAxios(`/produto`);

    return (
        <>
            {
                jogos.map((jogo, index) => {
                    return (
                        <h1 key={index}>{jogo.titulo}</h1>
                    )
                })

            }
        </>
    )
}

export default Home;
