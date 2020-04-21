import React from 'react';
import './App.css';

class Dog extends React.Component {



    render = () => {
        let showPhoto = this.props.id === this.props.randomId ? "photo show" : "photo";

        return (
            <div className="item">
                <img onClick={this.props.addNumber} className={showPhoto}
                     src="https://memepedia.ru/wp-content/uploads/2018/01/14014760737580-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg" alt={""}/>
                <audio src="dog.mp3"/>
            </div>

        );
    };
}

export default Dog;
