import React from 'react'
import './ErrorModal.css'

function ErrorModal() {
  return (
    <div>
      <div className='backdrop'></div>
    <div className='modal'>
        <header>
            <h2>Instruction</h2>
        </header>
        <div>
            <p>Click anywhere on the screen to change the skyline</p>
        </div>
        <footer>
            <button>OK</button>
        </footer>
    </div>
    </div>
  )
}

export default ErrorModal