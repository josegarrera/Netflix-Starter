import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {Logo} from '../images/Netflix';
import {Button, ConnectButton, Icon, Modal, Tab, TabList} from 'web3uikit';
import {movies} from '../helpers/library';

const Home = () => {
	const [visible, setVisible] = useState(false);
	const [selectedFilm, setSelectedFilm] = useState();

	return (
		<>
			<div className='logo'>
				<Logo />
			</div>
			<div className='connect'>
				<Icon fill='#ffffff' size={24} svg='bell' />
				<ConnectButton />
			</div>
			<div className='topBanner'>
				<TabList defaultActiveKey={1} tabStyle='bar'>
					<Tab tabKey={1} tabName={'Movies'}>
						<div className='scene'>
							<img src={movies[0].Scene} alt='scene' className='sceneImg' />
							<img className='sceneLogo' src={movies[0].Logo} alt='logo' />
							<p className='sceneDesc'>{movies[0].Description}</p>
							<div className='playButton'>
								<Button
									icon='chevronRightX2'
									text='Play'
									theme='secondary'
									type='button'
								/>

								<Button
									icon='plus'
									text='Add to my list'
									theme='translucent'
									type='button'
								/>
							</div>
						</div>

						<div className='title'>Movies</div>

						<div className='thumbs'>
							{movies?.map((movie) => (
								<img
									src={movie.Thumnbnail}
									className='thumbnail'
									alt={movie.Description}
									onClick={() => {
										setSelectedFilm(movie);
										setVisible(true);
									}}
								/>
							))}
						</div>
					</Tab>
					<Tab tabKey={2} tabName={'Series'} isDisabled={true}></Tab>
					<Tab tabKey={3} tabName={'My List'}></Tab>
				</TabList>
				{selectedFilm && (
					<div className='modal'>
						<Modal
							onCloseButtonPressed={() => setVisible(false)}
							isVisible={visible}
							hasFooter={false}
							width={'1000px'}
						>
							<div className='modalContent'>
								<img
									className='modalImg'
									src={selectedFilm.Scene}
									alt={selectedFilm.Description}
								></img>
								<img
									className='modalLogo'
									src={selectedFilm.Logo}
									alt={selectedFilm.Description}
								></img>
								<div className='modalPlayButton'>
									<Link to='/player' state={selectedFilm.Movie}>
										<Button
											icon='chevronRightX2'
											text='Play'
											theme='secondary'
											type='button'
										/>
									</Link>
									<Button
										icon='plus'
										text='Add to my list'
										theme='translucent'
										type='button'
									/>
								</div>

								<div className='movieInfo'>
									<div className='description'>
										<div className='details'>
											<span>{selectedFilm.Year}</span>
											<span>{selectedFilm.Duration}</span>
										</div>
										{selectedFilm.Description}
									</div>

									<div className='detailedInfo'>
										Genre:
										<span className='deets'>{selectedFilm.Genre}</span>
										<br />
										Actors:
										<span className='deets'>{selectedFilm.Actors}</span>
									</div>
								</div>
							</div>
						</Modal>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
