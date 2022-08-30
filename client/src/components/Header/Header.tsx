import React, { useState, useEffect, useCallback } from 'react'
import './Header.css';

export default function Header(): JSX.Element {

    const [searchText, setsearchText] = useState("")

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

        let tosearch = searchText ? searchText : value;

        console.log(searchText, value);

        //now send it to parent component so that filter can be done
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
                            name="search" id="nav_search" placeholder="Search title"
                            onKeyUp={(e) => searchMovies(e.target.value) } />

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>

  );
}
