import React from 'react'

export default class InputComponent extends React.Component {
    constructor (props) {
        super(props)
        this.autoComplete = null
        this.autocompleteInput = React.createRef();
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }
    componentDidMount () {
        const google = window.google
        this.autoComplete =  new google.maps.places.Autocomplete(this.autocompleteInput.current,
            {"types": ["geocode"]});
       setTimeout(() => this.autoComplete.addListener('place_changed', this.handlePlaceChanged), 2000)
    }
    handlePlaceChanged(){
        const place = this.autoComplete.getPlace();
        this.props.onPlaceLoaded(place);
      }
    render () {
        return (                
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="">{this.props.label}</label>
                <div class="col-sm-10">
                <input ref={this.autocompleteInput} className="form-control input"  id="autocomplete" placeholder={"Enter your address " + this.props.label}
         type="text"></input>
            
                </div>
            </div>
        )
    }
}