import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import female from "../images/female.svg"
import male from "../images/male.svg"


//initialisation des imports Redux
import { connect } from 'react-redux';


function Accueil(props) {

    const [firstName, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")


    //initialisation de la page recupération des props du store afin de concerver les infos lorsquon revient sur la page 
    useEffect(() => {
        setFirstname(props.firstName)
        setLastName(props.lastName)
    }, [])



    //envoi du firstname et lastname dans le store Redux 
    const submitInformation = async (firstName, lastName) => {
        props.saveFirstname(firstName)
        props.saveLastname(lastName)

    }

    // activation du bouton Next quand les inputs sont différent de vide
    const btn = firstName === '' || lastName === ''
        ? <button disabled>Continuer</button>
        : <Link to="/gender"><button type="submit" onClick={() => submitInformation(firstName, lastName)}>Continuer</button></Link>;



    return (
        <div className='homepage'>
            <div className='form'>
                <div className="gender-icon male">
                    <img src={male} alt="male"></img>
                </div>
                <div className="gender-icon female">
                    <img src={female} alt="female"></img>
                </div>
                <div className='inputBox'>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} required value={firstName.trim()} />
                    <label>firstName</label>
                </div>
                <div className='inputBox'>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} required value={lastName.trim()} />
                    <label >lastName</label>
                </div>
                {btn}
            </div>
        </div>
    )
}



//envoi au reducer le firstname et le lastname
function mapDispatchToProps(dispatch) {
    return {
        saveFirstname: function (firstname) {
            dispatch({ type: 'saveFirstname', firstname: firstname })
        },
        saveLastname: function (lastName) {
            dispatch({ type: 'saveLastname', lastName: lastName })
        }
    }
}


//recupération du firstname et lastname afin de les laisser afficher dans les inputs lorsquon revient à la page d'accueil
function mapStateToProps(state) {
    return {
        lastName: state.lastName,
        firstName: state.firstName
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accueil);

