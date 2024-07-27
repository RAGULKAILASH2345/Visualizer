import React, { Component } from 'react';
import { visualize } from './visualization';
import { board } from './board';
import "./nQueens.css";
import 'animate.css';
const SIZE_OF_BOARD = 8;

export default class NQueens extends Component{
    componentDidMount(){
        board(SIZE_OF_BOARD);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-12">
                                    <center>
                                        <h2>N-Queens-Visualizer</h2>
                                    </center>
                                </div>
                            </div>
                            <div className="box board mb-2" id="board"></div>
                            <div className="row">
                                <div className="input-group mt-3 ml-1 container col-sm-6">
                                <div className="input-group append">
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => visualize()}>
                                            Visualize N-Queens
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="Iterations" className="col-sm-4 mt-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}