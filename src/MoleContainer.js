import { useState } from 'react'
import Mole from './Mole'

const MoleContainer = (props) => {
const [displayMole, setDisplayMole] = useState(false)
const display= displayMole ? <Mole /> : <img style={{'width': '10vw'}} src="molehill.png" alt="molehill" />

    return (
        <>
        {displayMole}
        </>
    )
}

export default MoleContainer