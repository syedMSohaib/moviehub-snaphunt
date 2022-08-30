import React, { useState, useEffect, useRef,  useCallback } from 'react'
// import { useNavigate, useSearchParams } from "react-router-dom"
import './Header.css';
import {
    useQueryParams,
    StringParam,
  } from 'use-query-params';


interface HeaderProps {
    inputSearch?: any,
}

export default function Header(props: HeaderProps): JSX.Element {

    const [searchText, setsearchText] = useState("")
    const [tosearch, setToSearch] = useState("");
    const [search, setSearch] = useQueryParams({
        text: StringParam,
    });
    const inputsearch = useRef();
    // const [search, setSearch] = useSearchParams();

    // const navigate = useNavigate()

    const debounceFunction = (fn: any, d: string|number) => {
        let timer: any;
        return function() {
            let self = this;
            let args = arguments;
            clearInterval(timer);
            timer = setTimeout(() => {
                fn.apply(self, arguments);
            }, d);
        }
    }

    const debounceFunc = useCallback(debounceFunction((value: any) => filterMovie(value), 700), []);

    const searchMovies = (value: any) => {
        setsearchText(value);
        debounceFunc(value);
    }

    const filterMovie = (value: string|number) => {

        const tosearch = searchText ? searchText : value;

        setSearch({ text: tosearch }, 'push');

        console.log('searchText', tosearch);

        props.inputSearch(tosearch);
        // console.log();

    }

    useEffect(() => {
        inputsearch.current.value = search.text || '';
        // console.log(, search.text);
    }, [])

    const handleClearSearch = (): void => {
        setSearch({ text: '' }, 'push');
        inputsearch.current.value = '';
    }

    return (
    <section id="navBar">
        <div className="container-fluid p-0">
            <div className="row no-gutters justify-content-center">
                <div className="col-xl-11">
                    <nav className="navbar navbar-light justify-content-between">
                        <a className="navbar-brand" href="/">
                            <img src="/images/logo.png" alt="logo" className="navbarBrand" />
                        </a>
                        <div className="searchbox">
                            <input type="text"
                            ref={inputsearch}
                            name="search" id="nav_search" placeholder="Search title"
                            onKeyUp={(e) => searchMovies(e.target.value) } />

                            <button className="cancel" onClick={handleClearSearch}>x</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>

  );
}
