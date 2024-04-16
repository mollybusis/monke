import './RenderedResponses.css';
import Response from './Response';
export default function RenderedResponses ({arrayman}){

    console.log("HI THIS IS ME", arrayman)

    return (<>
        <div class = "box">
            {arrayman.map(function(name, index){
                    return <Response text={name}/>;
                  })}
            
        </div>
    </>)
}
