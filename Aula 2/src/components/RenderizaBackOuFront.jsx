import React from 'react'

const RenderizaBackOuFront = () => {

  function renderizaBackouFront(qualRenderizar) {
    if (qualRenderizar === "Java") {
        return <h1>Texto em h1</h1>
    } else if (qualRenderizar === "React") {
        return <b>React</b>
    } else {
        return <h2>Cloud</h2>
    }
}

return (
<div>
{qualRenderizar("Java")}
{qualRenderizar("React")}
{qualRenderizar("Cloud")}
</div>
)
}

export default RenderizaBackOuFront
