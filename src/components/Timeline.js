import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Timeline() {
    return (
        <div>
            <div className="timeline__article">
                <h3 className="timeline__title">
                    Late 2019 outbreak 
                </h3>
                <p className="timeline__text">
                    A key metric in gauging the severity of COVID-19 is the infection fatality rate (IFR), also referred to as the infection fatality ratio or infection fatality risk.
                    A key metric in gauging the severity of COVID-19 is the infection fatality rate (IFR), also referred to as the infection fatality ratio or infection fatality risk.
                </p>
                <a>Read more  <FaArrowRight /> </a>
                
            </div>
            <div className="timeline__article">
                <h3 className="timeline__title">
                    Spread to Europe
                </h3>
                <p className="timeline__text">
                    An analysis of those IFR rates indicates that COVID-19 is hazardous not only for the elderly but also for middle-aged adults, for whom a fatal COVID-19 infection is two orders of magnitude more likely than the annualized risk of a fatal automobile accident and far more dangerous than seasonal influenza.
                    An analysis of those IFR rates indicates that COVID-19 is hazardous not only for the elderly but also for middle-aged adults, for whom a fatal COVID-19 infection is two orders of magnitude more likely than the annualized risk of a fatal automobile accident and far more dangerous than seasonal influenza.
                </p>
                <a>Read more  <FaArrowRight  /></a>
                
            </div>
            <div className="timeline__article">
                <h3 className="timeline__title">
                    First lockdown
                </h3>
                <p className="timeline__text">
                    COVID-19 case fatality rates are higher among men than women in most countries. However, in a few countries like India, Nepal, Vietnam, and Slovenia the fatality cases are higher in women than men.
                    COVID-19 case fatality rates are higher among men than women in most countries. However, in a few countries like India, Nepal, Vietnam, and Slovenia the fatality cases are higher in women than men.
                </p>
                <a>Read more  <FaArrowRight  /></a>
                
            </div>
            <div className="timeline__article">
                <h3 className="timeline__title">
                    Vaccination progress
                </h3>
                <p className="timeline__text">
                    Most critical respiratory comorbidities according to the CDC, are: moderate or severe asthma, pre-existing COPD, pulmonary fibrosis, cystic fibrosis.
                    Most critical respiratory comorbidities according to the CDC, are: moderate or severe asthma, pre-existing COPD, pulmonary fibrosis, cystic fibrosis.
                </p>
                <a>Read more  <FaArrowRight  /></a>          
            </div>
           
            
        </div>
    )
}
