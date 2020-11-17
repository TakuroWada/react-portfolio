
import React from 'react'
import IconButton from './IconButton'
import ImagePassKyoto from '../../assets/images/kyoto.png'
import ImagePassKobe from '../../assets/images/kobe.png'
import ImagePassYokohama from '../../assets/images/yokohama.png'
import ImagePassTokyo from '../../assets/images/tokyo.png'

class Screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: ImagePassKyoto,
            alt: 'kyoto'
        };
    }

    changeImage(select) {
        this.setState({ image: select });
        this.setState({ alt: 'img' });
    }

    render() {
        const kyoto = ImagePassKyoto
        const kobe = ImagePassKobe
        const yokohama = ImagePassYokohama
        const tokyo = ImagePassTokyo

        return (
            <div>
                <img src={this.state.image} alt={this.state.alt} />
                <div>
                    <IconButton
                        icon={kyoto}
                        value='kyoto'
                        image={kyoto}
                        callMethod={(select) => this.changeImage(select)}
                    />
                    <IconButton
                        icon={kobe}
                        value='kobe'
                        image={kobe}
                        callMethod={(select) => this.changeImage(select)}
                    />
                    <IconButton
                        icon={yokohama}
                        value='yokohama'
                        image={yokohama}
                        callMethod={(select) => this.changeImage(select)}
                    />
                    <IconButton
                        icon={tokyo}
                        value='tokyo'
                        image={tokyo}
                        callMethod={(select) => this.changeImage(select)}
                    />
                </div>
            </div>
        );
    }
}

export default Screen;