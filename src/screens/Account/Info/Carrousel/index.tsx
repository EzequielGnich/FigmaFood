import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import CarouselCardItem from './CarouselCardItem';

import styles from './styles';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselSlider = props => {
	const isCarousel = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<Carousel
				layout="default"
				layoutCardOffset={9}
				ref={isCarousel}
				data={props.data || []}
				renderItem={({ item, index }) => (
					<CarouselCardItem item={item} index={index} />
				)}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				onSnapToItem={index => setIndex(index)}
				useScrollView={true}
			/>
			<Pagination
				dotsLength={(props.data || []).length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={styles.dotStyle}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				tappableDots={true}
			/>
		</>
	);
};

export default CarouselSlider;
