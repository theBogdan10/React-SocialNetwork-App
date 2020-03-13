import React from 'react';
import loading from '../../../assets/images/loading.gif';


const Preloader = () => {
	return(
		<div>
			<img src={loading} style={{width:100,height:100}} />
		</div>
	);
};

export default Preloader;