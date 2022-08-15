import React, { useState, useEffect } from 'react'
import { Link, Redirect } from "react-router-dom";
import female from "../images/female.svg"
import male from "../images/male.svg"
import error from "../images/error.svg"


//initialisation des imports Redux
import { connect } from 'react-redux';



function Gender(props) {

    const [Gender, setGender] = useState("...")//... afin d'eviter un input vide le temps du chargement
    const [Probability, setProbability] = useState("")
    const [Age, setAge] = useState(0)




    //initialisation des informations de l'api au chargements de la page grace au info du store
    useEffect(() => {
        async function loadData() {
            const response = await fetch("/result-api", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `firstname=${props.firstName}`,
            })

            const jsonResponse = await response.json();
            var resultApi = jsonResponse.dataAPI
            setGender(resultApi.gender)
            setProbability(resultApi.probability * 100)
        }
        loadData()
    }, [])



    //fonction qui envoi vers la page résult et sauvegarde dans le store.
    function submitGender() {
        props.saveResultGender(Gender)
        props.saveProba(Probability)
        props.saveAge(Age)
    }

    // activation du bouton Next quand les inputs sont diférent de vide
    const btn = Gender === '' || Probability === '' || Age === '' ? <button disabled>en attente d'information</button> : <Link to="/result"><button onClick={() => { submitGender(Gender, Age, Probability) }}>Continuer</button></Link>


    if (Gender === undefined) {
        return (
            <Redirect to="/" />
        )
    } else {
        if (Gender === 'male') {
            return (
                <div>
                    <div>
                        <header>
                            <div>
                                <Link to="/"><button className='headerBtn'> &#60; Retour</button></Link>
                            </div>
                        </header>
                    </div>
                    <div className='homepage'>
                        <div className='form'>
                            <div className="gender-icon-male">
                                <img src={male} alt="male"></img>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={Gender} />
                                <label>Gender</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={Probability + " %"} />
                                <label >Probability</label>
                            </div>
                            <div className='inputBox'>
                                <input type="number" min={0} required onChange={(e) => setAge(e.target.value)} value={Age} />
                                <label>Age </label>
                            </div>
                            {btn}
                        </div>
                    </div>
                </div>
            )
        } else if (Gender === 'female') {
            return (

                <div>
                    <div>
                        <header>
                            <div>
                                <Link to="/"><button className='headerBtn'> &#60; Retour</button></Link>
                            </div>
                        </header>
                    </div>
                    <div className='homepage'>
                        <div className='form'>

                            <div className="gender-icon-female">
                                <img src={female} alt="female"></img>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={Gender} />
                                <label>Gender</label>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required value={Probability + " %"} />
                                <label >Probability</label>
                            </div>
                            <div className='inputBox'>
                                <input type="number" min={0} required onChange={(e) => setAge(e.target.value)} value={Age} />
                                <label>Age </label>
                            </div>
                            {btn}
                        </div>
                    </div>
                </div>
            )
        } else if (Gender === null) {
            return (
                <div>
                    <div>
                        <header>
                            <div>
                                <Link to="/"><button className='headerBtn'> &#60; Retour</button></Link>
                            </div>
                        </header>
                    </div>
                    <div className='homepage'>
                        <div className='form'>

                            <div className="gender-icon-error ">
                                <img src={error} alt="error"></img>
                            </div>
                            <div className='inputBox'>
                                <p>Désolé aucun genre n'a été trouvé, veuillez recommencer</p>
                            </div>
                            {/* balise <a></a> afin de vider le store */}
                            <a href='/'><button> Recommencer </button></a>
                        </div>
                    </div>
                </div>
            )

        }
    }



}
function mapDispatchToProps(dispatch) {
    return {
        saveResultGender: function (gender) {
            dispatch({ type: 'saveResultGender', ResultGender: gender })
        },
        saveAge: function (Age) {
            dispatch({ type: 'saveAge', Age: Age })
        },
        saveProba: function (proba) {
            dispatch({ type: 'saveProba', Probability: proba })
        }
    }
}



function mapStateToProps(state) {
    return {
        lastName: state.lastName,
        firstName: state.firstName
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Gender);

