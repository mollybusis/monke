import './RenderedResponses.css';
import Response from './Response';
export default function RenderedResponses ({arrayman}){

    console.log("HI THIS IS ME", arrayman)

    return (<>
        <div>
            Rendering
        </div> 
        <div>
            <ul>
            {arrayman.map(function(name, index){
                    return <Response text={name}/>;
                  })}
            </ul>
        </div>
    </>)
}
