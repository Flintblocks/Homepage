import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};


export const contact = async (args: string[]): Promise<string> => {
  return 'Drop us an email message at hello@flintblocks.io to get in touch and discuss what we can do for you';
};



export const banner = (args?: string[]): string => {
  return `
   ____ __   __ _  __ _____ ___   __   _    __  _     ___
  / __// /  / // |/ //_  _// o.) / / ,' \\ ,'_/ / //7,' _/
 / _/ / /_ / // || /  / / / o \\ / /_/ o |/ /_ /  ,'_\\ \`. 
/_/  /___//_//_/|_/  /_/ /___,'/___/|_,' |__//_/\\\\/___,' 
                                                         v${packageJson.version}
--
Flintblocks is a web3 consultancy firm based in Singapore 🦁
We're founded in 2023 in the year of the rabbit 🐇
Here are the list of available commands to get you started 💯💯

Type any of this commands in this website ⌨

[Commands] 
about - Bring up the about page
contact - Show how to drop us a message
projects - All the projects that we've done so far
services - What we offer to founders creating their new DeFi projects!
--
`;
};
