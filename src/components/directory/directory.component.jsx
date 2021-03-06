import MenuItem from '../menu-item/menu-item.component';
import React from 'react';

import './directory.styles.scss';
import SECTIONS_DATA from './sections.data';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: SECTIONS_DATA,
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionprops }) => (
					<MenuItem key={id} {...otherSectionprops} />
				))}
			</div>
		);
	}
}

export default Directory;
