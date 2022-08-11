import React from "react";
import Definition from "../components/Definition";
import Example from "../components/Example";
import Synonyms from "../components/Synonym";
import Antonyms from "../components/Antonyms";



const Select = ({all, main, audio}) => {
    return(
        <>
            <div className="container-fluid">
                <div className="row dark-theme">
                    <div className="col-12 text-center text-capitalize text-capitalize fs-4 fw-bold">
                        {main.word}
                    </div>
                    { audio ? (
                        <audio
                        controls
                        className="color m-4 text-center col-10"
                        src={audio}>
                        </audio>
                    ): (
                        <div className="color fs-3 text-center text-capitalize fs-4 fw-bold">Audio not found</div>
                    )}
                    <div className="col 12 text-start my-3 text-capitalize fs-4 fw-bold">
                        Meaning & Definitions:
                    </div>
                    <div>
                        <ol>
                            {/* <Definition all={all} /> */}
                        </ol>
                    </div>
                    <div className="col 12 text-start my-3 text-capitalize fs-4 fw-bold">
                        Synonyms:
                    </div>
                    <div className="col-12 li">
                        {/* <Synonyms all={all} /> */}
                    </div>
                    <div className="col 12 text-start my-3 text-capitalize fs-4 fw-bold">
                        Antonyms:
                    </div>
                    <div className="col-12 li">
                        {/* <Antonyms all={all} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Select;