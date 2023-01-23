import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  return `
  We're a Web3 Consultancy firm based in Singapore, founder by Syahrul in 2023 and his friends. 
  We've been active in the space as solo developers since 2017, and took many projects during the DeFi
  summer of 2020. As a group, we provided smart contract development services to many fledging DeFI protocols.
  Our core business involve the deployment of decentralized apps and the forking of established protocols,
  modified to your needs. We can also create a custom protocol just for you!
  
  Currently we have successfully forked these protocols and modified them for countless teams:
  1. Uniswap v1/v2
  2. Sushiswap (both exchange and masterchef)
  3. YearnFinance staking pools
  4. Decentralized perps such as GMX
  5. ERC20 tokens with custom functionality
  6. NFTs with custom functionality
  
  If you're a new DeFi protocol, we're also provide security audits and optimizations!
  
  Type in the \'help'\ command to get a list of all possible commands if you've forgotten!
  Type in the \'services\' command to get a full range of our services!
  Type in the \'contact\' command to drop us a message 
  `;
};

export const getServices = () => {
  return `
  We offer two services, Protocol Design & Deployment and Smart Contract Security Audit
  Note: While we do both contract development and audit, we do not provide a package that does both.
  This is to prevent conflicts of interest as an auditor shouldn't be the same as the developer
  
  Protocol Design and Development
  1) Fork any protocol/token of your choice
     - Token deployment with custom functionality (1 week, USD 1000) 
     - A well established protocol that we forked before (2 weeks, USD 5000)
     - A well established protocol that we never forked before (4 weeks, USD 10000)
  2) Create your own protocol
     - Develop your own pools
     - New ideas that you're looking to explore
     
  Security Audit
  We will audit your smart contract. Our audit rates are fixed, at 5000 USD per project. 
  Our audits will include: 
  1) Gas optimizations ( we will provide a report on how much gas is saved)
  2) Style optimizations
  3) Vulnerability Report (low,medium,high and critical severities)
  `
}

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
