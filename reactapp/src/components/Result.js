import React from 'react'
import female from "../images/female.svg"
import male from "../images/male.svg"
import { Link, Redirect } from "react-router-dom";

//initialisation des imports Redux
import { connect } from 'react-redux';




function Result(props) {



    //nous avons state la variable Gender dans gender.js à ("...") donc si aucune data n'est sotcké il y aura ... envoyé sur redux
    if(props.gender === "..."){
        return (
            <Redirect to="/" />
        )
    }else{
        if (props.gender === "male") {
            return (
                <div>
                    <div>
                        <header>
                            <div>
                                <Link to="/gender"><button className='headerBtn'> &#60; Retour</button></Link>
                            </div>
                        </header>
                    </div>
                    <div className='homepage'>
                        <div className='form'>
                            <div className="gender-icon-male">
                                <img src={male} alt="male"></img>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.firstName} />                              
                                <label >firstName</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.lastName} />
                                <label >lastName</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.gender} />
                                <label>Gender</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required min={0} value={props.age + " an(s)"} />
                                <label>Age</label>
                            </div>
                            <a href='/'><button> On recommence? </button></a>
                        </div>
                    </div>
                </div>
            )
        } else if (props.gender === "female") {
            return (
                <div>
                    <div>
                        <header>
                            <div>
                                <Link to="/gender"><button className='headerBtn'> &#60; Retour</button></Link>
                            </div>
                        </header>
                    </div>
                    <div className='homepage'>
                        <div className='form'>
                            <div className="gender-icon-female">
                                <img src={female} alt="female"></img>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.firstName} />
                                <label >firstName</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.lastName} />
                                <label >lastName</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={props.gender} />
                                <label>Gender</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required min={0} value={props.age + " an(s)"} />
                                <label>Age</label>
                            </div>
                            <a href='/'><button> On recommence? </button></a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    
}


function mapStateToProps(state) {
    return {
        gender: state.gender,
        firstName: state.firstName,
        lastName: state.lastName,
        age: state.age
    }
}

export default connect(
    mapStateToProps,
    null,
)(Result);

