import React from 'react'
import NavigationBar from '../extention/navigationBar'

const pageController = props => {
    return(
        <div>
            <NavigationBar />
            {props.children}
        </div>
    )
}

export default pageController;