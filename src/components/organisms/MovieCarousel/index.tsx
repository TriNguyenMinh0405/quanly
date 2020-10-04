import React from 'react';
import { customModifier } from 'functions';
import Carousel from 'components/molecules/Carousel';
import CardMovie from 'components/molecules/CardMovie';
export interface MovieCarouselProps {}
const MovieCarousel: React.FC<MovieCarouselProps> = () => {
    const poster = [
        'https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg',
        'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2',
        'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
        'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
        'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289',
        'https://images.squarespace-cdn.com/content/v1/561bfd2fe4b0ff1a3acaf634/1554328931459-MVLCW4IV4P5VECKN2O8A/ke17ZwdGBToddI8pDm48kHTjdXaoHj2XBS1xQ9Jx_M57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uei60Zpw-ZuEzVY2XSpngzHUNhdVwAOL_XMz32vi4iSsh9ymnU-gXScjHEMuNgenFw/Sandman_Poster.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41uhSmXquNL._AC_.jpg',
        'https://i.ebayimg.com/images/g/RrQAAMXQUY1Q9t9r/s-l600.jpg',
        'https://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg',
        'https://www.mockofun.com/wp-content/uploads/2019/10/online-horror-movie-poster.jpg',
    ];
    return (
        <div className={customModifier('o-moviecarousel')}>
            <Carousel timeSpeed={7000} dots={false} respon slideShow={5}>
                {poster.map((item, index) => {
                    return <CardMovie key={index} src={item} />;
                })}
            </Carousel>
        </div>
    );
};
export default MovieCarousel;
