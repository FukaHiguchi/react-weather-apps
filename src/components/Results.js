
const Results = (props) =>{
    return(
        <div>
            {props.result.cityName && <div>{props.result.cityName}</div>}
            {props.result.coutnry && <div>{props.result.country}</div>}
            {props.result.temperature && <div>{props.result.temperature} <span> ℃</span></div>}
            {props.result.conditionText &&
                <div>
                    <img src={props.result.icon} alt="icon"/>
                    <span>{props.result.conditionText}</span>
                </div>
            }
            
        </div>
    );
};

export default Results;