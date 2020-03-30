import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import heroimage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('Login', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente')
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Seu ID"
                    value={id}
                    onChange={e=> setId(e.target.value)}
                    ></input>
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn
                        size={16}
                        color="#E02041"
                        />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroimage} alt="Heroes" />
        </div>

    );
}