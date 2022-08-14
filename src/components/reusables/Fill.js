export default function Fill (props){

    const style = {backgroundColor: props.color, position: props.position, height:"100vh", width: "100%"};
    
    return (
        <div id="fill" style={style}></div>
    )
}