import { useContext } from 'react';
import { LanguageContext } from '../../Context/Context';
import './Flags.css';

function Flags(){

    const context = useContext(LanguageContext);

    const english = (e) => {
        e.preventDefault();
        context.handleEnglish();
    }

    const german = (e) => {
        e.preventDefault();
        context.handleGerman();
    }

    const spanish = (e) => {
        e.preventDefault();
        context.handleSpanish();
    }

    return(
        <div className='flags'>
            <img onClick={english} src={require('./uk.png')} alt="" height='40' width='65' className='uk-flag' />
            <img onClick={german} src={require('./germany.png')} alt="" height='40' width='65' className='germany-flag' />
            <img onClick={spanish} src={require('./spain.png')} alt="" height='40' width='65' className='spain-flag' />
        </div>
    )

}

export default Flags