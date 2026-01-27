export var h1 = <h1 id="title">Hello World</h1>;
export var h2 = <h2 class="heading">Welcome to ReactJS</h2>;

function App(){
    return(
        <div>
            {h1}
            {h2}
        </div>
    )
}

export default App;
