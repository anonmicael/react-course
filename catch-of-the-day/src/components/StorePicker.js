import React from 'react'; 
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    goToStore = event => {
        // impide que el form se envíe
        event.preventDefault();
        // coge el texto del input
        const storeName = this.myInput.current.value;
        // cambiar la pagina a lo que introduzcan por teclado
        this.props.history.push(`/store/${storeName}`);
    }
    
    render() {
        console.log(this);
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;