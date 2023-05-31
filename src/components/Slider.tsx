import Carousel from 'react-material-ui-carousel'
import Banner from './Banner';

// Is this component effectively a duplicate of ImageSlider? - Andre
function Slider() {
    var items = [
        {
            name: "/images/chicago_skyline.jpg",
            size: 600,
            text: "Strive for the best.",
        },
        {
            name: "/images/fe-stockphoto.png",
            size: 600,
            text: "Find a supportive community.",
        },
    ];

    return (
        <Carousel>
            {items.map(item => <Banner key={item.name} imgsrc={item.name} ht={item.size}>{item.text}</Banner>)}
        </Carousel>
    );
}

export default Slider;