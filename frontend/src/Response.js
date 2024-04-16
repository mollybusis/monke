import './Response.css';

export default function Response ({text}){

    const colors = ['#cdfc93', '#ff7ecd', '#71d7ff', 'ce81ff', '#fff68b', '#ffc97d', '#ffbfeb', '#baffd8', '#b5d5ff', '#e3b7ff']

    return (<>
        
        <div class="outside"  style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>
            {text}
        </div>
    </>)
}
