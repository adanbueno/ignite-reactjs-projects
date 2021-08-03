import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const repository = {
    name: 'unform',
    description: 'Forms in Reactjs',
    link: 'https://github.com/'
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}
                />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}