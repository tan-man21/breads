const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
    console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>and it 
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>
            <a href="/breads"><button>Go Home</button></a>
            </span>
            <span>
            <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            </span>
            <span>
            <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type="submit" value="DELETE" />
            </form>
            </span>
            </div>
        </Default>
    )
}

module.exports = Show