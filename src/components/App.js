import { useState, useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import Countdown from 'react-countdown'
import Web3 from 'web3'

// Import Images + CSS
import twitter from '../images/socials/twitter.svg'
import instagram from '../images/socials/instagram.svg'
import opensea from '../images/socials/opensea.svg'
import showcase from '../images/showcase.png'
import '../App.css'

// Import Components
import Navbar from './Navbar'

// Import ABI + Config
import Moon_Frenz from '../abis/Moon_Frenz.json'
import config from '../config.json'

function App() {
	const [web3, setWeb3] = useState(null)
	const [openPunks, setOpenPunks] = useState(null)

	const [supplyAvailable, setSupplyAvailable] = useState(0)

	const [account, setAccount] = useState(null)
	const [networkId, setNetworkId] = useState(null)
	const [ownerOf, setOwnerOf] = useState([])

	const [explorerURL, setExplorerURL] = useState('https://etherscan.io')
	const [openseaURL, setOpenseaURL] = useState('https://opensea.io')

	const [isMinting, setIsMinting] = useState(false)
	const [isError, setIsError] = useState(false)
	const [message, setMessage] = useState(null)

	const [currentTime, setCurrentTime] = useState(new Date().getTime())
	const [revealTime, setRevealTime] = useState(0)

	const [counter, setCounter] = useState(7)
	const [isCycling, setIsCycling] = useState(false)

	const loadBlockchainData = async (_web3, _account, _networkId) => {
		// Fetch Contract, Data, etc.
		try {
			const openPunks = new _web3.eth.Contract(Moon_Frenz.abi, Moon_Frenz.networks[_networkId].address)
			setOpenPunks(openPunks)

			const maxSupply = await openPunks.methods.maxSupply().call()
			const totalSupply = await openPunks.methods.totalSupply().call()
			setSupplyAvailable(maxSupply - totalSupply)

			const allowMintingAfter = await openPunks.methods.allowMintingAfter().call()
			const timeDeployed = await openPunks.methods.timeDeployed().call()
			setRevealTime((Number(timeDeployed) + Number(allowMintingAfter)).toString() + '000')

			if (_account) {
				const ownerOf = await openPunks.methods.walletOfOwner(_account).call()
				setOwnerOf(ownerOf)
				console.log(ownerOf)
			} else {
				setOwnerOf([])
			}

		} catch (error) {
			setIsError(true)
			setMessage("Contract not deployed to current network, please change network in MetaMask")
		}
	}

	const loadWeb3 = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const web3 = new Web3(window.ethereum)
			setWeb3(web3)

			const accounts = await web3.eth.getAccounts()
			console.log(accounts)

			if (accounts.length > 0) {
				setAccount(accounts[0])
			} else {
				setMessage('Please connect with MetaMask')
			}

			const networkId = await web3.eth.net.getId()
			setNetworkId(networkId)

			if (networkId !== 5777) {
				setExplorerURL(config.NETWORKS[networkId].explorerURL)
				setOpenseaURL(config.NETWORKS[networkId].openseaURL)
			}

			await loadBlockchainData(web3, accounts[0], networkId)

			window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
				setMessage(null)
			})

			window.ethereum.on('chainChanged', (chainId) => {
				// Handle the new chain.
				// Correctly handling chain changes can be complicated.
				// We recommend reloading the page unless you have good reason not to.
				window.location.reload();
			})
		}
	}

	// MetaMask Login/Connect
	const web3Handler = async () => {
		if (web3) {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			setAccount(accounts[0])
		}
	}

	const mintNFTHandler = async () => {
		if (revealTime > new Date().getTime()) {
			window.alert('Minting is not live yet!')
			return
		}

		if (ownerOf.length > 100) {
			window.alert('You\'ve minted enough!')
			return
		}

		// Mint NFT
		if (openPunks && account) {
			setIsMinting(true)
			setIsError(false)

			await openPunks.methods.mint(1).send({ from: account, value: 0 })
				.on('confirmation', async () => {
					const maxSupply = await openPunks.methods.maxSupply().call()
					const totalSupply = await openPunks.methods.totalSupply().call()
					setSupplyAvailable(maxSupply - totalSupply)

					const ownerOf = await openPunks.methods.walletOfOwner(account).call()
					setOwnerOf(ownerOf)
				})
				.on('error', (error) => {
					window.alert(error)
					setIsError(true)
				})
		}

		setIsMinting(false)
	}

	const cycleImages = async () => {
		const getRandomNumber = () => {
			const counter = (Math.floor(Math.random() * 1000)) + 1
			setCounter(counter)
		}

		if (!isCycling) { setInterval(getRandomNumber, 3000) }
		setIsCycling(true)
	}

	useEffect(() => {
		loadWeb3()
		cycleImages()
	}, [account]);

	return (
		<div>
			<Navbar web3Handler={web3Handler} account={account} explorerURL={explorerURL} />

			<header class="header">
				<a href="#" class="logo"> <i class="fa-brands fa-earlybirds"></i> Cluckies </a>

				<nav class="navbar">
					<a href="#home">The Farm</a>
					<a href="#mint">Mint</a>
					<a href="#rarities">Rarities</a>
					<a href="#chickencoop">The Chicken Coop</a>
					<a href="#roadmap">Roadmap</a>
					<a href="#faq">FAQ</a>
				</nav>

				<div class="icons">
					<a id="menu-btn" class="fas fa-bars"></a>
					<a href="#" id="search-btn" class="fa-brands fa-twitter"></a>
					<a href="https://discord.gg/ZHEpvSVCxt" id="cart-btn" class="fa-brands fa-discord"></a>
					<a href="#" id="login-btn" class="fa-brands fa-fort-awesome"></a>
				</div>
			</header>

			{/* Home section */}
			<section class="home" id="home">
				<div class="slides-container">

					<div class="slide active">
						<div class="content">
							<div class="slideimg">
								<img src="img/main.png">
							</div>
							<h3>Cluck, grab one of our 1,777 Cluckies and become the first mothercluckers on the Ethereum mainnet.</h3>
								<a href="#" class="btn">twitter</a>
								<a href="#" class="btn">opensea</a>
						</div>
						<div class="img">
							<img src="img/main1.png" alt="">
						</div>
					</div>

					<div class="slide">
						<div class="content">
							<div class="slideimg">
								<img src="img/main.png">
							</div>
							<h3>Hey clucker, make sure youre following us on twitter and clucking around in our discord with the rest of the mothercluckers</h3>
								<a href="#" class="btn">twitter</a>
								<a href="#" class="btn">opensea</a>
						</div>
						<div class="img">
							<img src="img/main2.png" alt="">
						</div>
					</div>
				</div>
				<div id="next-slide"class="fas fa-angle-right" onclick="next()"></div>
				<div id="prev-slide"class="fas fa-angle-left" onclick="next()"></div>
			</section>


			{/* minting button (takes you to mintng page) */}
			<section class="banner-container" id="mint">
				<div class="banner">
					<img src="img/home.jpeg">
					<div class="content">
						<span>Supply: 1,777</span>
						<h3>Price: 0.02 ETH</h3>
						<a href="#" class="btn">MINT</a>
					</div>
				</div> 
			</section>



			{/* rarities section */}
			<section class="story" id="rarities">
				<h1 class="title"><span>Rarities</span><a href="#">view on opensea >></a> </h1>

				<div class="box-container">

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-1"></a>
						</div>
						<div class="img">
							<img src="img/slide.png">
						</div>
						<div class="content">
							<h3>Common Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i> 
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-2"></a>
							<a class="fa-solid fa-5"></a>
						</div>
						<div class="img">
							<img src="img/slide1.png">
						</div>
						<div class="content">
							<h3>Uncommon Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i> 
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-5"></a>
							<a class="fa-solid fa-0"></a>
						</div>
						<div class="img">
							<img src="img/slide2.png">
						</div>
						<div class="content">
							<h3>Rare Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-7"></a>
							<a class="fa-solid fa-5"></a>
						</div>
						<div class="img">
							<img src="img/slide3.png">
						</div>
						<div class="content">
							<h3>Epic Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i> 
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-1"></a>
							<a class="fa-solid fa-0"></a>
							<a class="fa-solid fa-0"></a>
						</div>
						<div class="img">
							<img src="img/slide4.png">
						</div>
						<div class="content">
							<h3>Mythic Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-5"></a>
							<a class="fa-solid fa-5"></a>
							<a class="fa-solid fa-5"></a>
						</div>
						<div class="img">
							<img src="img/slide5.png">
						</div>
						<div class="content">
							<h3>Exceptional Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-7"></a>
							<a class="fa-solid fa-7"></a>
							<a class="fa-solid fa-7"></a>
						</div>
						<div class="img">
							<img src="img/slide6.png">
						</div>
						<div class="content">
							<h3>Legendary Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
							</div>
						</div>
					</div>

					<div class="box">
						<div class="icons">
							<a class="fa-solid fa-1"></a>
							<a class="fa-solid fa-1"></a>
							<a class="fa-solid fa-1"></a>
							<a class="fa-solid fa-1"></a>
						</div>
						<div class="img">
							<img src="img/slide7.png">
						</div>
						<div class="content">
							<h3>1/1 Cluckie</h3>
							<div class="stars">
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
								<i class="fa fa-star"></i>  
							</div>
						</div>
					</div>

				</div>
			</section>


			<section id="chickencoop">
				<h1 class="title"> The <span>Chicken Coop</span> <a href="https://discord.gg/ZHEpvSVCxt">Join the chicken coop >></a> </h1>
			</section>
			<section class="firepit">
				<div class="content">
					<h3>The MotherCluckin Chicken Coop</h3>
					<p>
						Here is where we come together as mother cluckers
						and cluck around in the NFT space.
					</p>
					<br><br>
					<p>
						Just cluck it, we do what we want and dont give a cluck 
						what anyone thinks. Come be frens and lay $EGGS all around
						the ETH mainnet with us.
					</p>
					<a href="https://discord.gg/ZHEpvSVCxt" class="btn">Discord</a>
				</div>

				<div class="img">
					<img src="img/fire pits.png"/>
				</div>
			</section>



			<section>
				<h1 class="title">roadmap</h1>
			</section>

			<section class="roadmap" id="roadmap">
				<div class="swiper mySwiper roadmap-slider">
					<div class="swiper-wrapper wrapper">

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide11.png">
								<div class="user-info">
									<h3>Building the coop</h3>
								</div>
							</div>
							<p>
								The chicken coop consists of our discord, twitter,
								website, and any other cluck'n social media platforms 
								we want to be on.
							</p> 
							<br></br>
							<p>
								Once created, we will start collaborating
								with other communities that are on brand with the mother clucker 
								mentality. mfrs get free whitelist spots. you're welcome.
							</p>
						</div>

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide44.png"/>
								<div class="user-info">
									<h3>Laying Season</h3>
								</div>
							</div>
							<p>- Date: tbd</p>
							<p>- Supply: 1,777</p>
							<p>- Free-Mint Supply: 77</p>
							<p>- Presale: 700 (0.01 ETH)</p>
							<p>- Public Sale: 1,000 (0.02 ETH)</p>
						</div>

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide55.png"/>
								<div class="user-info">
									<h3>Staking for $EGGS</h3>
								</div>
							</div>
							<p>Now that you are a true mother clucker, 
								sit your ass down in a nest and start laying 
								some $EGGS so you can get your baby clucks.
							</p>
						</div>

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide66.png"/>
								<div class="user-info">
									<h3>MERCH</h3>
								</div>
							</div>
							<p>Community will pick ALL the merch options we will have on our merchant site</p>
						</div>

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide71.png"/>
								<div class="user-info">
									<h3>Baby Cluck available for staked Cluckies</h3>
								</div>
							</div>
							<p>
								Simple enough, stake your Cluckie, lay some $EGGS and then wait
								for them to hatch and BOOM you are starting your own cluck'n 
								family
							</p>
						</div>

						<div class="swiper-slide slide">
							<div class="user">
								<img src="img/slide99.jpeg"/>
								<div class="user-info">
									<h3>ROADMAP 2.Cluck</h3>
								</div>
							</div>
							<p>Mother CLUCK!! We are expanding and building so much we will need a new fuck'n roadmap!</p>
						</div>

					</div>
				</div>
			</section>



			<section class="teams">
				<h1 class="title">our <span>team</span> <a href="#">view all >></a></h1>


				<div class="box-container">

					<div class="box">
						<div class="img">
							<img src="img/founder.png">
						</div>
						<div class="content">
							<div class="icons">
								<a class="fas fa-calendar"></i>6+ yrs</a>
								<a class="fas fa-user"></i>Cluckie Founder & Artist</a>
							</div>
							<h3>Master Cluck</h3>
							<p>Lorem ipsum dolor sit amet, farhan aliqua. Ut enim ad minim veniam, quis</p>
						</div>
					</div>

					<div class="box">
						<div class="img">
							<img src="img/mainside.png">
						</div>
						<div class="content">
							<div class="icons">
								<a class="fas fa-calendar"></i>10+ yrs</a>
								<a class="fas fa-user"></i>Cluckster Marketer</a>
							</div>
							<h3>Super Cluck</h3>
							<p>Lorem ipsum dolor sit amet, farhan aliqua. Ut enim ad minim veniam, quis</p>
						</div>
					</div>

					<div class="box">
						<div class="img">
							<img src="img/owner.png">
						</div>
						<div class="content">
							<div class="icons">
								<a class="fas fa-calendar"></i>2+ yrs</a>
								<a class="fas fa-user"></i>Cluckchain  Developer</a>
							</div>
							<h3>Cluck'n Clucker</h3>
							<p>I like to cluck... i mean code.</p>
						</div>
					</div>

					<div class="box">
						<div class="img">
							<img src="img/communitymanager.png">
						</div>
						<div class="content">
							<div class="icons">
								<a class="fas fa-calendar"></i>15+yrs</a>
								<a class="fas fa-user"></i>Community  Manacluck</a>
							</div>
							<h3>Community Cluck</h3>
							<p>Lorem ipsum dolor sit amet, farhan aliqua. Ut enim ad minim veniam, quis</p>
						</div>
					</div>

					<div class="box">
						<div class="img">
							<img src="img/developer.png">
						</div>
						<div class="content">
							<div class="icons">
								<a class="fas fa-calendar"></i>3+ yrs</a>
								<a class="fas fa-user"></i>Cluckchain  Developer</a>
							</div>
							<h3>Cluck'n Dev</h3>
							<p>
								I have been clucking around in the web3 space for about 5 years now as 
								a full time degen. 3 years ago I fell in love with the tech and never looked back.
								Cluck Cluck MotherCluckers!
							</p>
						</div>
					</div>

				</div>
			</section>



			<section id="faq">
				<h1 class="title">FAQ <span>question</span> <a href="#">our notion page >></a></h1>
			</section>

			<section class="faq">
				<div class="icons-container">
					<div class="icons">
						<i class="fas fa-bookmark"></i>
						<h3>What are the clucking minting limits?</h3>
						<p>Per wallet: unlimited // Per transaction: 10</p>
					</div>

					<div class="icons">
						<i class="fas fa-money-bill-alt"></i>
						<h3>What is the cost?</h3>
						<p>Free: 77 / Public-Sale: 0.02 ETH</p>
					</div>

					<div class="icons">
						<i class="fas fa-cookie"></i>
						<h3>What is the total supply?</h3>
						<p>1,777</p>
					</div>
				</div>
			</section>

			{/* <!-- footer section start --> */}

			<section class="footer">
				<div class="box-container">
					<div class="box">
						<h3>quick links</h3>
							<a href="#home"> <i class="fa fa-arrow-right"></i>Home</a>
							<a href="#mint"> <i class="fa fa-arrow-right"></i>Mint</a>
							<a href="#rarities"> <i class="fa fa-arrow-right"></i>Rarities</a>
							<a href="#chickencoop"> <i class="fa fa-arrow-right"></i>Chicken Coop</a>
							<a href="#roadmap"> <i class="fa fa-arrow-right"></i>Roadmap</a>
							<a href="#faq"> <i class="fa fa-arrow-right"></i>FAQ</a>
					</div>

					<div class="box">
						<h3>extra links</h3>
							<a href="#"> <i class="fa fa-arrow-right"></i> Our Notion Page</a>
							<a href="#"> <i class="fa fa-arrow-right"></i> IMB Labs</a>
							<a href="#"> <i class="fa fa-arrow-right"></i> OpenSea</a>
							<a href="#"> <i class="fa fa-arrow-right"></i> terms or use</a>
							<a href="#"> <i class="fa fa-arrow-right"></i> policy</a>
					</div>

					<div class="box">
						<h3>follow us</h3>
						<a href="#"> <i class="fab fa-twitter"></i> twitter</a>
						<a href="#"> <i class="fab fa-instagram"></i> instagram</a>
						<a href="#"> <i class="fab fa-discord"></i> Discord</a>
						<a href="#"> <i class="fab fa-tiktok"></i> Tik Tok</a>
					</div>
			</div>
			</section>

			<section class="credit">created by <span>IMB Labs ®</span></section>

			<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
				{/* <!-- custom ja file link --> */}
				<script src="main.js"></script>
	)
}

export default App
